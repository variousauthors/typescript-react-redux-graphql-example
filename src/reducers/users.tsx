
import { IUserStates, IUserState, ActionType, IUserToggleShowBio } from '../types/index'

const initialUserStates: IUserStates = {}
const initialUserState: IUserState = {
  showBio: false
}

type IUserActionType = IUserToggleShowBio

const userReducer = (state = initialUserState, action: IUserActionType): IUserState => {
  switch (action.type) {
    case ActionType.USER_TOGGLE_SHOW_BIO: {
      return {
        ...state,
        showBio: !state.showBio
      }
    }
    default: {
      return state
    }
  }
}

const usersReducer = (state = initialUserStates, action: IUserActionType): IUserStates => {

  switch (action.type) {
    case ActionType.USER_TOGGLE_SHOW_BIO: {
      const user = state[action.data.userId]

      return {
        ...state,
        [action.data.userId]: userReducer(user, action)
      }
    }
    default: {
      return state
    }
  }
}

export default usersReducer