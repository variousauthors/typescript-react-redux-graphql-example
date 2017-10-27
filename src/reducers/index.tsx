import reduceReducers from 'reduce-reducers'
import { combineReducers, ReducersMapObject } from 'redux'
import { IState, IAction } from '../types/index'

import userListSearch from './userListSearch'
import users from './users'
import locale from './locale'

const rootReducer = (state: IState, action: IAction): IState => {
  return state
}

export default (vendorReducers: ReducersMapObject) => {
  return reduceReducers(
    combineReducers({
      ...vendorReducers,
      userListSearch,
      locale,
      users,
    }),
    rootReducer
  )
}