import { UserProfile, auth } from '@clerk/nextjs'
import React from 'react'

const ProfilePage = async() => {

  const {userId} = auth()

    return (
      <div>
        <UserProfile/>
      </div>
    )
}

export default ProfilePage
