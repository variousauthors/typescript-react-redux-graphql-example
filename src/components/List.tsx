import * as React from 'react'
import { IListItemProps, ListItem } from './ListItem'

export interface IListProps {
  name: string
  list: IListItemProps[]

  queryStatus: {
    isLoading: boolean
    error: string
  }
}

export class List extends React.PureComponent<IListProps> {
  render () {
    const list = this.props.list.map((item, index) => {
      return <ListItem key={index} {...item} />
    })

    return (
      <div className={this.props.queryStatus.isLoading ? 'loading' : ''}>
        <h1>{this.props.name}</h1>
        {list}
      </div>
    )
  }
}