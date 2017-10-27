import { ActionType, IUpdateListSearch } from '../types/index'

interface IUpdateListSearchParams {
  userName: string
  count: number
}

const updateListSearch = ({ userName, count }: IUpdateListSearchParams): IUpdateListSearch => {
  return {
    type: ActionType.UPDATE_LIST_SEARCH,
    data: {
      userName,
      count
    }
  }
}

export default {
  updateListSearch
}