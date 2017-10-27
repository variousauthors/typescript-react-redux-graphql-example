import * as React from 'react'
import T from '../../helpers/i18n-react-redux'

export interface IInputShortText extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  label?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export class InputShortText extends React.PureComponent<IInputShortText> {

  render () {
    const className = `form-control ${this.props.className}`

    return (
      <div>
        { this.props.label ? (
          <label className='form-label' htmlFor={this.props.id}><T.text text={this.props.label} /></label>
        ) : null }
        <input
          {...this.props}
          className={className}
          value={this.props.value || ''}
          name={this.props.name ? this.props.name : this.props.id}
          type='text'
        />
      </div>
    )
  }
}