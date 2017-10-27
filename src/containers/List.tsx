import { graphql, gql, OptionProps } from 'react-apollo'
import { connect, Dispatch } from 'react-redux'

import ActionCreator from '../actions/index'
import { IState } from '../types/index'
import { List as Base, IListProps as IBaseProps } from '../components/List'
import { mem } from '../helpers/PurityHelpers'

const QUERY = gql`{
  search(first:10, query:"bob", type:USER) {
    nodes {
      ... on User {
        name
      }
    }
  }
}
`

interface IVariables {
  variables?: {
    name: string
  }
}

interface IResponse {
  allUsers: IResponseItem[]
}

interface IResponseItem {
  userId: number
  name: string
}

interface IPropsFromParent { // from parent component
}

interface IPropsFromState { // from state
  name: string
}

interface IPropsFromDispatch { // from dispatch
}

export const mapPropsToVariables = (props: IPropsFromParent & IPropsFromState & IPropsFromDispatch): IVariables => {

  const variables = {
    name: props.name,
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
    name: props.ownProps.name,
    list: props.data.allUsers ? props.data.allUsers : mem([])
  }
}

export const mapStateToProps = (state: IState, props: IPropsFromParent): IPropsFromParent & IPropsFromState => {

  return {
    name: state.name
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