import { ActionType, IUpdateListSearch, ISetLocale, LocaleType, IUserToggleShowBio } from '../types/index'

interface IUpdateListSearchParams {
  userName?: string
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

const setLocale = (locale: LocaleType): ISetLocale => {

  return {
    type: ActionType.SET_LOCALE,
    data: {
      code: locale
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
  setLocale,
  userToggleShowBio,
}