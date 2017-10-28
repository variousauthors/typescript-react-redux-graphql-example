import * as React from 'react'
import ListItem from '../containers/UserListItem'
import { InputShortText } from './Input/InputShortText'
import { InputFormGroup } from './Input/InputFormGroup'
import { InputForm } from './Input/InputForm'
import { IUserListItem } from '../types/index'

export interface IUserListProps {
  login: string
  list: IUserListItem[]

  queryStatus: {
    isLoading: boolean
    error: string
  }

  loginSearchChange: (userName: string) => void
}

export class UserList extends React.PureComponent<IUserListProps> {
  constructor (props: IUserListProps) {
    super(props)

    /** all event handlers must be bound in the constructor
     *  using anonymous arrow functions in render is banned
     */
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  handleNameChange (e: React.ChangeEvent<HTMLInputElement>) {
    this.props.loginSearchChange(e.target.value)
  }

  render () {
    const list = this.props.list.map((item, index) => {
      return <ListItem key={index} item={item} />
    })

    return (
      <div className={this.props.queryStatus.isLoading ? 'loading' : ''}>
        <h1>Users (search: "{this.props.login}")</h1>
        <InputForm>
          <InputFormGroup>
            <InputShortText
              label='Search'
              id='userSearch'
              value={this.props.login}
              onChange={this.handleNameChange}
            />
          </InputFormGroup>
        </InputForm>
        {list}
      </div>
    )
  }
}