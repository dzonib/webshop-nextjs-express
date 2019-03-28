import React, {useEffect, useState} from 'react'
import axios from 'axios'

axios.defaults.withCredentials = true

export default function ProfileComponent() {

  const [profile, setProfile] = useState('')

  useEffect(() => {
    axios.get('/api/user/profile')
      .then(({data}) => {
        setProfile(data)
      })
  }, [])


  return (
    <div>
        <h1>Profile</h1> 
        {profile && <pre>{JSON.stringify(profile, null, 2)}</pre>}
    </div>
  )
}