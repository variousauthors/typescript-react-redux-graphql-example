import * as React from 'react'
import ListItem from '../containers/ListItem'
import { InputShortText } from './Input/InputShortText'
import { InputFormGroup } from './Input/InputFormGroup'
import { InputForm } from './Input/InputForm'
import { IUserListItem } from '../types/index'

export interface IListProps {
  userName: string
  list: IUserListItem[]

  queryStatus: {
    isLoading: boolean
    error: string
  }

  userNameChange: (userName: string) => void
}

export class List extends React.PureComponent<IListProps> {
  constructor (props: IListProps) {
    super(props)

    this.handleNameChange = this.handleNameChange.bind(this)
  }

  handleNameChange (e: React.ChangeEvent<HTMLInputElement>) {
    this.props.userNameChange(e.target.value)
  }

  render () {
    const list = this.props.list.map((item, index) => {
      return <ListItem key={index} item={item} />
    })

    return (
      <div className={this.props.queryStatus.isLoading ? 'loading' : ''}>
        <h1>Users (search: "{this.props.userName}")</h1>
        <InputForm>
          <InputFormGroup>
            <InputShortText label='Search' id='userSearch' value={this.props.userName} onChange={this.handleNameChange} />
          </InputFormGroup>
        </InputForm>
        {list}
      </div>
    )
  }
}