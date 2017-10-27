import * as React from 'react'

export interface IUserBioProps {
  bio: string
}

export class UserBio extends React.PureComponent<IUserBioProps> {

  render () {
    return this.props.bio
  }
}