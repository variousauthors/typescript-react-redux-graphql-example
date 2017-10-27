import * as React from 'react'

interface IInputFormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  isValid?: boolean
}

interface IInputFormGroupState {
  hasLostFocus: boolean
}

export class InputFormGroup extends React.Component<IInputFormGroupProps, IInputFormGroupState> {
  constructor (props: IInputFormGroupProps) {
    super(props)

    this.state = {
      hasLostFocus: false
    }
  }

  handleBlur (e: React.FocusEvent<HTMLDivElement>) {
    if (this.props.onBlur) {
      this.props.onBlur(e)
    }

    this.setState({
      ...this.state,
      hasLostFocus: true
    })
  }

  render () {
    const hasError = this.props.isValid === false ? 'error' : ''
    const hasLostFocus = this.state.hasLostFocus ? 'has-lost-focus' : ''
    const className = this.props.className ? this.props.className : ''

    return (
      <div
        className={`form-group ${className} ${hasError} ${hasLostFocus}`}
        onBlur={(e) => this.handleBlur(e)}
      >
        {this.props.children}
      </div>
    )
  }
}