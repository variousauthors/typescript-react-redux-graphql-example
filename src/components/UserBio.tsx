import * as React from 'react'

export interface IUserBioProps {
  bio?: string
  location?: string
  name: string
  isHireable: boolean
  queryStatus: {
    isLoading: boolean
    error: string
  }
}

export class UserBio extends React.PureComponent<IUserBioProps> {

  render () {
    return (
      <div>
        <div>
          <b>Name:</b> {this.props.name}
        </div>

        <div>
          <b>Location:</b> {this.props.location}
        </div>

        <div>
          <b>Bio:</b> {this.props.bio}
        </div>

        <div>
          <b>Hireable:</b> {this.props.isHireable ? 'Yes!' : 'No...'}
        </div>
      </div>
    )
  }
}