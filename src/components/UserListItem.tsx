import * as React from 'react'
import { UserBio } from './UserBio'
import { IUserListItem } from '../types/index'

export interface IListItemProps {
  item: IUserListItem
  showUserBio: boolean
  toggleShowBio: (id: number) => void
}

export class ListItem extends React.PureComponent<IListItemProps> {
  constructor (props: IListItemProps) {
    super(props)

    this.handleUserNameClick = this.handleUserNameClick.bind(this)
  }

  handleUserNameClick (e: React.MouseEvent<HTMLDivElement>) {
    this.props.toggleShowBio(this.props.item.id)
  }

  render () {
    return (
      <div>
        <div onClick={this.handleUserNameClick}>{this.props.item.name}</div>
        {this.props.showUserBio ? (
          <UserBio bio='blah blah blah' />
        ) : null}
      </div>
    )
  }
}