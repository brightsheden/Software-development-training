import React, { useState } from "react";
import './home.css'
import Navbar from './Navbar'
import Hook from "./Hook";
import ProfilePage from "./ProfilePage";
import LoginComponent from "./LoginComponent";


const Home = ()=>{



    return (

        <div>
            <Navbar brand_name={'Olamide'} />
            <h1 className="header-name" id="header-id">About me</h1>

            <p style={{
                color:'white', backgroundColor:"black",
                marginTop:'20px', padding:"10px"
            }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus explicabo eveniet, earum tempora, consectetur eaque ex consequatur modi optio voluptatem sequi voluptatibus omnis deserunt nisi, perspiciatis repellendus molestiae sed aspernatur!</p>

            <section>
                <h2>Skills</h2>
                <div>
                    <span>Java</span>
                    <span>Java</span>
                    <span>Java</span>
                    <span>Java</span>
                </div>
            </section>

            <section>
                <Hook/>

       
            </section>



        </div>
       
    )
}

export default Home