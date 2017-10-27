import * as React from 'react'

export interface IInputFormProps extends React.HTMLAttributes<HTMLFormElement> {
}

interface IInputFormState {
  hasSubmitAttempt: boolean
}

export class InputForm extends React.Component<IInputFormProps, IInputFormState> {
  constructor (props: IInputFormProps) {
    super(props)

    this.state = {
      hasSubmitAttempt: false
    }
  }

  handleSubmitAttempt (e: React.MouseEvent<HTMLFormElement>) {
    if (!(e.target instanceof HTMLButtonElement)) {
      return
    }

    if (e.target.type !== 'submit') {
      return
    }

    this.setState({
      hasSubmitAttempt: true
    })
  }

  render () {
    const hasSubmitAttempt = this.state.hasSubmitAttempt ? 'has-submit-attempt' : ''
    const props = {
      ...this.props,
      className: `${this.props.className} ${hasSubmitAttempt}`,
    }

    return (
      <form {...props} onClick={(e) => this.handleSubmitAttempt(e)}>
        {this.props.children}
      </form>
    )
  }
}