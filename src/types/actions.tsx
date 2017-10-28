import { LocaleType } from './index'

export const enum ActionType {
  UPDATE_LIST_SEARCH = 'UPDATE_LIST_SEARCH',
  SET_LOCALE = 'SET_LOCALE',
  USER_TOGGLE_SHOW_BIO = 'USER_TOGGLE_SHOW_BIO'
}

export interface IAction {
  type: ActionType
  // tslint:disable-next-line:no-any
  data?: object
}

export interface IUpdateListSearch extends IAction {
  type: ActionType.UPDATE_LIST_SEARCH
  data: { 
    login?: string
    count?: number
  }
}

export interface ISetLocale extends IAction {
  type: ActionType.SET_LOCALE,
  data: {
    code: LocaleType
  }
}

export interface IUserToggleShowBio extends IAction {
  type: ActionType.USER_TOGGLE_SHOW_BIO,
  data: {
    userId: number
  }
}