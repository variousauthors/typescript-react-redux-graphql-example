import listSearchActionCreators from './userListSearch'
import { LocaleType, ISetLocale, ActionType } from '../types/index'

const setLocale = (locale: LocaleType): ISetLocale => {

  return {
    type: ActionType.SET_LOCALE,
    data: {
      code: locale
    }
  }
}

export default {
  ...listSearchActionCreators,
  setLocale,
}
