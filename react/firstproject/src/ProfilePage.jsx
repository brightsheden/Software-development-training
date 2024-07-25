import React from 'react'

function ProfilePage({handleLogoutt}) {
    const handleLogout=()=>{
        handleLogoutt()

    }
  return (
    <div>
        <h1>Profile Page</h1>
        <p>Username danchare</p>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default ProfilePage