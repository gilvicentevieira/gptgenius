import { fetchUserTokensById } from '@/utils/actions'
import { UserProfile, auth } from '@clerk/nextjs'
import React from 'react'

const ProfilePage = async() => {

  const {userId} = auth()
  const currentTokens = await fetchUserTokensById(userId)

    return (
      <div>
        <h2 className='mb-8 ml-8 text-xl font-extrabold'>
          Token amount: {currentTokens}
        </h2>
        <UserProfile/>
      </div>
    )
}

export default ProfilePage
