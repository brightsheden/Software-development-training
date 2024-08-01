import React, { useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'

function HomePage() {

    const navigate = useNavigate()
    const is_login = true

    useEffect(()=>{
        if(is_login){
            navigate('/about')
        }
    })

    const MoveToContact = ()=>{
        navigate('/contactus')

    }
  return (
    <div style={{
        fontSize:'50px'
    }}>

        <h1>Home Page</h1>
        <div style={{
            gap:"5px"
        }}>
        <Link style={{
            margin:"5px"
        }} to='/about'>about</Link>
        <Link to='/contactus'>contactus</Link>

        <button onClick={MoveToContact}>Click me</button>
        </div>
        
    </div>
  )
}

export default HomePage