import { graphql, gql, OptionProps } from 'react-apollo'

import { UserBio as Base, IUserBioProps as IBaseProps } from '../components/UserBio'
import { mem } from '../helpers/PurityHelpers'

const QUERY = gql`
  query user($login: String!) {
    user(login: $login) {
      id
      login
      bio
      bioHTML
      isHireable
      location
      name
    }
  }
`

interface IVariables {
  variables?: {
    login: string
  }
}

interface IResponse {
  user: IResponseItem
}

interface IResponseItem {
  /**    ~~~~~~~~~~~~~~~ 
   * #typesafety
   * Unfortunately, we have no guarantee that the response from the server
   * will perfectly match this interface. If the response changes, or if
   * we update the QUERY above, then the actual response may not conform to
   * this interface. So be vigilant and try to update IResponseItem whenever
   * it goes out of sync!
   */
  id: number
  login: string
  bio?: string
  bioHTML: string
  isHireable: boolean
  location?: string
  name: string
}

/** IPropsFromParent specifies the Wrapped Component's API 
 * We will use the connect(UserBio) component like,
 * 
 * <UserBio login={string} />
 */
interface IPropsFromParent { // from parent component
  login: string
}

export const mapPropsToVariables = (props: IPropsFromParent): IVariables => {

  const variables = {
    login: props.login
  }

  return {
    variables
  }
}

export const mapGraphQLToProps = (props: OptionProps<IPropsFromParent, IResponse>): IBaseProps => {
  const data = props!.data!
  /** bang.        ~~~   ~~~
   * Typescript's !. operator suggests that "this value never be null".
   */

  return {
    queryStatus: mem({
    /** mem!    ~~~~~
     * #memoization, #referencial-purity
     * any time we return a function, object literal, or array literal from an HOC
     * we must memoize it. If we don't, we lose referential purity. A React Component
     * that receives [], for example, will _always_ rerender.
     */
      isLoading: data.loading,
      error: data.error ? data.error.message : '',
    }),

    /** notice that the types of some of these fields is (string | undefined) 
     * if a field is (string | undefined), should we check here and provide
     * a default value... or should the component handle that?
     */
    bio: data.user && data.user.bio,
    name: data.user && data.user.name,
    isHireable: data.user && data.user.isHireable,
    location: data.user && data.user.location,
  }
}

export default graphql<IResponse, IPropsFromParent, IBaseProps>(QUERY, {
  options: mapPropsToVariables,
  props: mapGraphQLToProps
})(Base)