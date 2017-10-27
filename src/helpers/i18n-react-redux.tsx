import * as React from 'react'
import { default as Translation } from 'i18n-react'
import { connect } from 'react-redux'
import * as R from 'ramda'
import { IState } from '../types/index'

interface ITranslationText {
  text: {
    key: string
    [val: string]: string | number | JSX.Element
  } | string
}

type TranslationSpanProps = React.HTMLAttributes<HTMLSpanElement> & ITranslationText

const text = connect((state: IState, props: TranslationSpanProps) => {
  return {
    lang: state.locale.code,
    ...props
  }

})((props: TranslationSpanProps) => {
  const rest = R.omit(['dispatch'], props)

  return <Translation.text {...rest} />
})

type TranslationOptionProps = React.OptionHTMLAttributes<HTMLOptionElement> & ITranslationText

const option = connect((state: IState, props: TranslationOptionProps) => {
  return {
    lang: state.locale.code,
    ...props
  }

})((props: TranslationOptionProps) => {
  const rest = R.omit(['dispatch'], props)

  return <Translation.text tag='option' {...rest} />
})

type TranslationAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & ITranslationText

const a = connect((state: IState, props: TranslationAnchorProps) => {
  return {
    lang: state.locale.code,
    ...props
  }

})((props: TranslationAnchorProps) => {
  const rest = R.omit(['dispatch'], props)

  return <Translation.text tag='a' {...rest} />
})

const T = {
  translate: Translation.translate.bind(Translation),
  text,
  option,
  a,
}

export default T