import { useState } from "react"
import ProfilePage from "./ProfilePage"
import LoginComponent from "./LoginComponent"

function Hook(){
    const [name,setName]  = useState('Olamide')
    const [is_login, setLogin] = useState(false)

    const loginFunction = ()=>{
        setLogin(!is_login)
    }

    const [counter, setCounter] = useState(5)
    const changeName = ()=>{
        setName('Zion system')
        console.log(name)
    }

    const increaseCounter = ()=>{
        setCounter( counter + 1)
    }

    const decreaseCounter = ()=>{
        setCounter( counter - 1)
    }

    const resetCounter = ()=> {setCounter(0)}

    return (
        <div style={{
            color:"black",
            textAlign:'center',
            font:'20px',
            border:"2px solid grey",
            height:"500px"
        }}>

            <p style={{
                color:"black",
                fontSize:"30px"
            }}>
                {name}
            </p>

            <button style={{
                padding:"5px",
                border: '1px solid blue',
                color:'black',
                
            }} onClick={changeName}>Change Name</button>

         <h1>Counter App</h1>
         <p style={{
            fontSize:"40px"
         }}>{counter}</p>

         <button  style={{
                padding:"5px",
                border: '1px solid blue',
                color:'black',
                
            }}  onClick={increaseCounter}>Increase</button>
         <button style={{
                padding:"5px",
                border: '1px solid blue',
                color:'white',
                backgroundColor:"red"
                
            }} onClick={resetCounter}>Reset</button>
         <button style={{
                padding:"5px",
                border: '1px solid blue',
                
                
            }}  onClick={decreaseCounter}>Decrease</button>

            <div>

             
                {is_login && (<ProfilePage handleLogoutt={loginFunction}/>) }
                {!is_login && (<LoginComponent handleLogin={loginFunction} />) }



            </div>
        </div>
    )
}

export default Hook