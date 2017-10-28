import { graphql, gql, OptionProps } from 'react-apollo'
import { connect, Dispatch } from 'react-redux'

import { IState } from '../types/index'
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
  id: number
  login: string
  bio?: string
  bioHTML: string
  isHireable: boolean
  location?: string
  name: string
}

interface IPropsFromParent { // from parent component
  login: string
}

interface IPropsFromState { // from state
}

interface IPropsFromDispatch { // from dispatch
}

export const mapPropsToVariables = (props: IPropsFromParent & IPropsFromState & IPropsFromDispatch): IVariables => {

  const variables = {
    login: props.login
  }

  return {
    variables
  }
}

export const mapGraphQLToProps = (props: OptionProps<IPropsFromParent & IPropsFromState & IPropsFromDispatch, IResponse>): IBaseProps => {
  const data = props!.data!

  return {
    queryStatus: mem({
      isLoading: data.loading,
      error: data.error ? data.error.message : '',
    }),
    bio: data.user && data.user.bio,
    name: data.user && data.user.name,
    isHireable: data.user && data.user.isHireable,
    location: data.user && data.user.location,
  }
}

export const mapStateToProps = (state: IState, props: IPropsFromParent): IPropsFromState => {

  return {
  }
}

export const mapDispatchToProps = (dispatch: Dispatch<void>, props: IPropsFromParent): IPropsFromDispatch => {
  return {
  }
}

const BaseWithGraphQL = graphql<IResponse, IPropsFromParent & IPropsFromState & IPropsFromDispatch, IBaseProps>(QUERY, {
  options: mapPropsToVariables,
  props: mapGraphQLToProps
})(Base)

export default connect<IPropsFromState, IPropsFromDispatch, IPropsFromParent>(
  mapStateToProps,
  mapDispatchToProps,
)(BaseWithGraphQL)