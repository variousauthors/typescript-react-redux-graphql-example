import { connect, Dispatch } from 'react-redux'

import ActionCreator from '../actions/index'
import { IState, IUserListItem } from '../types/index'
import { UserListItem as Base, IUserListItemProps as IBaseProps } from '../components/UserListItem'

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
    showUserBio: user && user.showBio
  }
}

export const mapDispatchToProps = (dispatch: Dispatch<void>, props: IPropsFromParent): IPropsFromDispatch => {
  return {
    toggleShowBio: (id: number) => {
      /**          ~~~~
       * #memoization, #referential-purity
       * we have the id in mapStateToProps
       * so we _could_ compose a toggleShowBio :: () => void in mergeProps
       * but then it will almost certainly break referential purity
       * so instead we are passing the id out into the wrapped Component,
       * and letting the Component pass it back to us here
       */
      dispatch(ActionCreator.userToggleShowBio(id))
    }
  }
}

export const mergeProps = (propsFromState: IPropsFromState, propsFromDispatch: IPropsFromDispatch, propsFromParent: IPropsFromParent): IBaseProps => {
  return {
    item: propsFromParent.item,
    toggleShowBio: propsFromDispatch.toggleShowBio,
    showUserBio: propsFromState.showUserBio,
  }
}

export default connect<IPropsFromState, IPropsFromDispatch, IPropsFromParent, IBaseProps>(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(Base)