import { ActionType, IUpdateListSearch, ISetLocale, LocaleType } from '../types/index'

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

export default {
  updateListSearch,
  setLocale
}