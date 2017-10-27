import { graphql, gql, OptionProps } from 'react-apollo'
import { connect, Dispatch } from 'react-redux'

import ActionCreator from '../actions/index'
import { IState } from '../types/index'
import { List as Base, IListProps as IBaseProps } from '../components/List'
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

  return {
    queryStatus: mem({
      isLoading: props.data.loading,
      error: props.data.error ? props.data.error.message : '',
    }),
    name: props.ownProps.userName,
    list: props.data.search ? props.data.search.nodes : mem([])
  }
}

export const mapStateToProps = (state: IState, props: IPropsFromParent): IPropsFromParent & IPropsFromState => {

  return {
    userName: 'Bob',
    count: 10
  }
}

export const mapDispatchToProps = (dispatch: Dispatch<void>, props: IPropsFromParent): IPropsFromDispatch => {
  return {
    someAction: () => {
      dispatch(ActionCreator.showMoreInfo(1))
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