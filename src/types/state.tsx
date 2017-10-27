import { LocaleType } from './index'

export interface IStateListSearch {
  userName: string
  count: number
}

export interface IStateLocale {
  code: LocaleType
}

export interface IUserState {
  showBio: boolean
}

export interface IUserStates {
  [id: string]: IUserState
}

export interface IState {
  listSearch: IStateListSearch
  locale: IStateLocale
  users: IUserStates
}