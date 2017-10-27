import * as R from 'ramda'

const memoizeStore = R.memoize((o: Object): Object => o)

export function mem<T>(o: T): T {
  return memoizeStore(o)
}