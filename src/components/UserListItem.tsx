import * as React from 'react'
import UserBio from '../containers/UserBio'
import { IUserListItem } from '../types/index'

export interface IUserListItemProps {
  item: IUserListItem
  showUserBio: boolean
  toggleShowBio: (id: number) => void
}

export class UserListItem extends React.PureComponent<IUserListItemProps> {
  constructor (props: IUserListItemProps) {
    super(props)

    this.handleUserNameClick = this.handleUserNameClick.bind(this)
  }

  handleUserNameClick (e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    this.props.toggleShowBio(this.props.item.id)
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