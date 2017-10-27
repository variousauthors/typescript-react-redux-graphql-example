import { connect, Dispatch } from 'react-redux'

import ActionCreator from '../actions/index'
import { IState, IUserListItem } from '../types/index'
import { ListItem as Base } from '../components/ListItem'

interface IPropsFromParent { // from parent component
  item: IUserListItem
}

interface IPropsFromState { // from state
  showUserBio: boolean
}

interface IPropsFromDispatch { // from dispatch
  toggleShowBio: (id: number) => void
}

export const mapStateToProps = (state: IState, props: IPropsFromParent): IPropsFromState => {
  const user = state.users[props.item.id]

  return {
    showUserBio: user ? user.showBio : false
  }
}

export const mapDispatchToProps = (dispatch: Dispatch<void>, props: IPropsFromParent): IPropsFromDispatch => {
  return {
    toggleShowBio: (id: number) => {
      dispatch(ActionCreator.userToggleShowBio(id))
    }
  }
}

export default connect<IPropsFromState, IPropsFromDispatch, IPropsFromParent>(
  mapStateToProps,
  mapDispatchToProps,
)(Base)