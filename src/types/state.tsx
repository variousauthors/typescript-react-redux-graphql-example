import { LocaleType } from './index'

export interface IStateListSearch {
  userName: string
  count: number
}

export interface IStateLocale {
  code: LocaleType
}

export interface IState {
  listSearch: IStateListSearch
  locale: IStateLocale
}