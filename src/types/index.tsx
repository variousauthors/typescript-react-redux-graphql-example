export * from './actions'
export * from './state'

export interface ILocale {
  code: LocaleType
}

export interface IUserListItem {
  id: number
  name: string
}

export const enum LocaleType {
  EN = 'en',
  JA = 'ja',
  ES = 'es',
  PT = 'pt',
  IT = 'it',
}