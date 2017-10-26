interface IListItemProps {
  name: string
}

interface IListProps {
  name: string
  list: IListItemProps[]
  isLoading: boolean
  error: string
}

class ListItem extends React.PureComponent<IListItemProps> {
  render () {
    return this.props.name
  }
}

class List extends React.PureComponent<IListProps> {
  render () {
    const list = this.props.list.map((item, index) => {
      return <ListItem key={index} {...item} />
    })

    return (
      <div className={this.props.isLoading ? 'loading' : ''}>
        <h1>{this.props.name}</h1>
        {list}
      </div>
    )
  }
}