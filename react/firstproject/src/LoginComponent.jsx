import React, { useState } from 'react'

function LoginComponent(props) {
    const [usermame, setUsername] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = (event)=>{
        event.preventDefault()
        props.handleLogin()
        console.log("username:" , usermame)
        console.log("password", password)
    }


  return (
    <div>

        <div>
            <p>username : {usermame}</p>
            <p>password : {password}</p>
        </div>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Username</label>
            <input type='text' name='usermame' placeholder='enter username'
            value={usermame}
            onChange={(e)=> setUsername(e.target.value)}
            />

            </div>

            <div>
            <label>Password</label>
            <input type='password' name='password' placeholder='enter password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />

            </div>

            <button>Login</button>
           
            
        </form>


    </div>
  )
}

export default LoginComponent