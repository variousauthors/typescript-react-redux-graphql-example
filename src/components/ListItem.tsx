import * as React from 'react'

export interface IListItemProps {
  name: string
}

export class ListItem extends React.PureComponent<IListItemProps> {
  render () {
    return this.props.name
  }
}