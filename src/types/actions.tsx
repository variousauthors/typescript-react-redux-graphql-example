import { LocaleType } from './index'

export const enum ActionType {
  UPDATE_LIST_SEARCH = 'UPDATE_LIST_SEARCH',
  SET_LOCALE = 'SET_LOCALE'
}

export interface IAction {
  type: ActionType
  // tslint:disable-next-line:no-any
  data: any
}

export interface IUpdateListSearch extends IAction {
  type: ActionType.UPDATE_LIST_SEARCH
  data: { 
    userName?: string
    count?: number
  }
}

export interface ISetLocale extends IAction {
  type: ActionType.SET_LOCALE,
  data: {
    code: LocaleType
  }
}