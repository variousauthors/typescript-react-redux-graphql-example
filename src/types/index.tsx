export * from './actions'
export * from './state'

export const enum ActionType {
  SHOW_MORE_INFO = 'SHOW_MORE_INFO',
}

export interface IAction {
  type: ActionType
  // tslint:disable-next-line:no-any
  data: any
}