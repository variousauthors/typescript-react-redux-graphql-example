import { ActionType, LocaleType, ILocale, ISetLocale } from '../types/index'
import T from 'i18n-react'

import translations from '../locales'

function dangerouslySetTexts (locale: object) {
  T.setTexts(locale, {
    MDFlavor: 0
  })
}

const initialLocaleState: ILocale = {
  code: LocaleType.EN
}

type ILocaleActionType = ISetLocale

const locales = (state = initialLocaleState, action: ILocaleActionType): ILocale => {
  switch (action.type) {
    case ActionType.SET_LOCALE: {
      const locale = translations[action.data.code]

      if (locale) {
        dangerouslySetTexts(locale)

        return {
          code: action.data.code
        }
      }

      return state
    }
    default: {
      return state
    }
  }
}

export default locales