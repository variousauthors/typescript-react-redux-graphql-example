import { graphql, gql, OptionProps } from 'react-apollo'
import { connect, Dispatch } from 'react-redux'

import ActionCreator from '../actions/index'
import { IState } from '../types/index'
import { List as Base, IListProps as IBaseProps } from '../components/UserList'
import { mem } from '../helpers/PurityHelpers'

const QUERY = gql`
  query search($count: Int!, $userName: String!) {
    search(first: $count, query: $userName, type:USER) {
      nodes {
        ... on User {
          id
          name
        }
      }
    }
  }
`

interface IVariables {
  variables?: {
    count: number
    userName: string
  }
}

interface IResponse {
  search: {
    nodes: IResponseItem[]
  }
}

interface IResponseItem {
  id: number
  name: string
}

interface IPropsFromParent { // from parent component
}

interface IPropsFromState { // from state
  userName: string
  count: number
}

interface IPropsFromDispatch { // from dispatch
  userNameChange: (userName: string) => void
}

export const mapPropsToVariables = (props: IPropsFromParent & IPropsFromState & IPropsFromDispatch): IVariables => {

  const variables = {
    userName: props.userName,
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
    userName: props.ownProps.userName,
    list: data.search ? data.search.nodes : mem([]),
    userNameChange: props.ownProps.userNameChange
  }
}

export const mapStateToProps = (state: IState, props: IPropsFromParent): IPropsFromParent & IPropsFromState => {

  return {
    userName: state.userListSearch.userName,
    count: state.userListSearch.count
  }
}

export const mapDispatchToProps = (dispatch: Dispatch<void>, props: IPropsFromParent): IPropsFromDispatch => {
  return {
    userNameChange: (userName: string) => {
      dispatch(ActionCreator.updateListSearch({ userName }))
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