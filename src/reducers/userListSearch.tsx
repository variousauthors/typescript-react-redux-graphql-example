import { IUserListSearchState, IUpdateListSearch, ActionType } from '../types/index'

const initialUserListSearch: IUserListSearchState = {
  userName: 'Bob',
  count: 10
}

type ListSearchActionType = IUpdateListSearch

const userListSearch = (state = initialUserListSearch, action: ListSearchActionType): IUserListSearchState => {
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

export default userListSearch