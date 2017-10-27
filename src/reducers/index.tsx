import reduceReducers from 'reduce-reducers'
import { combineReducers, ReducersMapObject } from 'redux'
import { IState, IAction } from '../types/index'

import listSearch from './listSearch'

const rootReducer = (state: IState, action: IAction): IState => {
  return state
}

export default (vendorReducers: ReducersMapObject) => {
  return reduceReducers(
    combineReducers({
      ...vendorReducers,
      listSearch
    }),
    rootReducer
  )
}