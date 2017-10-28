import * as React from 'react'
import UserBio from '../containers/UserBio'
import { IUserListItem } from '../types/index'

export interface IUserListItemProps {
  item: IUserListItem
  showUserBio: boolean
  toggleShowBio: () => void
}

export class UserListItem extends React.PureComponent<IUserListItemProps> {
  constructor (props: IUserListItemProps) {
    super(props)

    /** all event handlers must be bound in the constructor
     *  using anonymous arrow functions in render is banned
     */
    this.handleUserNameClick = this.handleUserNameClick.bind(this)
  }

  handleUserNameClick (e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    this.props.toggleShowBio()
  }

  render () {
    return (
      <div>
        <a href='/' onClick={this.handleUserNameClick}>{this.props.item.login}</a>
        {this.props.showUserBio ? (
          <UserBio login={this.props.item.login} />
        ) : null}
      </div>
    )
  }
}