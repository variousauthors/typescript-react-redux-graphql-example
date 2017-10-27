import { IAction, ActionType } from './index'

export interface IShowMoreInfo extends IAction {
  type: ActionType.SHOW_MORE_INFO
  data: { offeringId: number }
}