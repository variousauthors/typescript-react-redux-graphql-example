import { ActionType, IUserToggleShowBio } from '../types/index'

const userToggleShowBio = (id: number): IUserToggleShowBio => {

  return {
    type: ActionType.USER_TOGGLE_SHOW_BIO,
    data: {
      userId: id
    }
  }
}

export default {
  userToggleShowBio,
}