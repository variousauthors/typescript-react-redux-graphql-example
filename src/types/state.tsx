import { LocaleType } from './index'

export interface IUserListSearchState {
  userName: string
  count: number
}

export interface ILocaleState {
  code: LocaleType
}

export interface IUserState {
  showBio: boolean
}

export interface IUserStates {
  [id: string]: IUserState
}

export interface IState {
  userListSearch: IUserListSearchState
  locale: ILocaleState
  users: IUserStates
}