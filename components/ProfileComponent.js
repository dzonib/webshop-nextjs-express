import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Link from 'next/link'

axios.defaults.withCredentials = true

export default function ProfileComponent() {

  const [profile, setProfile] = useState('')
  const [errors, setErrors] = useState('')



  useEffect(() => {
    axios.get('/api/user/profile')
      .then(({data}) => {
        setProfile(data)
      })
      .catch(e => {
        setErrors(e.response.data)
      })
  }, [])


  if (!errors) {
    return (
      <div>
          <h1>Profile</h1> 
          {profile && <pre>{JSON.stringify(profile, null, 2)}</pre>}

      </div>
    )
  }

  return (
    <div>
      <h1>Error!</h1>
      <h4>{
        errors
      }</h4>

      go to {' '}
      <Link href="/login" style={{color: 'purple'}}>
        <a>Login</a>
      </Link>
    </div>
  )
}