import { IStateListSearch, IUpdateListSearch, ActionType } from '../types/index'

const initialListSearch: IStateListSearch = {
  userName: 'Bob',
  count: 10
}

type ListSearchActionType = IUpdateListSearch

const listSearch = (state = initialListSearch, action: ListSearchActionType): IStateListSearch => {
  switch (action.type) {
    case ActionType.UPDATE_LIST_SEARCH: {
      return {
        ...state,
        ...action.data
      }
    }
    default: {
      return state
    }
  }
}

export default listSearch