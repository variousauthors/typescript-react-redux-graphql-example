export const enum ActionType {
  UPDATE_LIST_SEARCH = 'UPDATE_LIST_SEARCH',
  BOB = 'BOB',
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