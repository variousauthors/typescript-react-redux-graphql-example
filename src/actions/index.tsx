import { IShowMoreInfo, ActionType } from '../types/index'

const showMoreInfo = (offeringId: number): IShowMoreInfo => {
  return {
    type: ActionType.SHOW_MORE_INFO,
    data: {
      offeringId,
    }
  }
}

export default {
  showMoreInfo
}