import { ActionType, IUpdateListSearch, IUserToggleShowBio } from '../types/index'

interface IUpdateListSearchParams {
  login?: string
  count?: number
}

const updateListSearch = (params: IUpdateListSearchParams): IUpdateListSearch => {
  return {
    type: ActionType.UPDATE_LIST_SEARCH,
    data: {
      ...params
    }
  }
}

const userToggleShowBio = (id: number): IUserToggleShowBio => {

  return {
    type: ActionType.USER_TOGGLE_SHOW_BIO,
    data: {
      userId: id
    }
  }
}

export default {
  updateListSearch,
  userToggleShowBio,
}