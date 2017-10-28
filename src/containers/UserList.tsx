import { graphql, gql, OptionProps } from 'react-apollo'
import { connect, Dispatch } from 'react-redux'

import ActionCreator from '../actions/index'
import { IState } from '../types/index'
import { UserList as Base, IUserListProps as IBaseProps } from '../components/UserList'
import { mem } from '../helpers/PurityHelpers'

const QUERY = gql`
  query search($count: Int!, $login: String!) {
    search(first: $count, query: $login, type:USER) {
      nodes {
        ... on User {
          id
          login
        }
      }
    }
  }
`

interface IVariables {
  variables?: {
    count: number
    login: string
  }
}

interface IResponse {
  search: {
    nodes: IResponseItem[]
  }
}

interface IResponseItem {
  id: number
  login: string
}

interface IPropsFromParent { // from parent component
}

interface IPropsFromState { // from state
  login: string
  count: number
}

interface IPropsFromDispatch { // from dispatch
  loginSearchChange: (login: string) => void
}

export const mapPropsToVariables = (props: IPropsFromParent & IPropsFromState & IPropsFromDispatch): IVariables => {

  const variables = {
    login: props.login,
    count: props.count
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
    login: props.ownProps.login,
    list: data.search ? data.search.nodes : mem([]),
    loginSearchChange: props.ownProps.loginSearchChange
  }
}

export const mapStateToProps = (state: IState, props: IPropsFromParent): IPropsFromParent & IPropsFromState => {

  return {
    login: state.userListSearch.login,
    count: state.userListSearch.count
  }
}

export const mapDispatchToProps = (dispatch: Dispatch<void>, props: IPropsFromParent): IPropsFromDispatch => {
  return {
    loginSearchChange: (login: string) => {
      dispatch(ActionCreator.updateListSearch({ login }))
    }
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