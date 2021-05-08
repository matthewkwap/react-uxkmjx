import {useState} from 'react';
import React from "react";

function Login(){
    let[Username,SetUsername] = useState("");
    let[Password,SetPassword] = useState("");
   
    let Submit = async (e) =>{
      e.preventDefault();

      if(Username.length < 10){
       alert("Username should be greater than 10")
       return;
       }
       let userd = {
        Username:e.target.user.value,
        Password:e.target.pass.value
      }
      const response = await fetch("http://localhost:3001/Create",{
            method:"POST",
            headers:{'Content-Type':"application/json"},
            body: JSON.stringify(userd)
        })
        console.log(response.json())
      
      console.log(userd)
        

    }




    return(
        <div>
            <form onSubmit={Submit}>
                
               <div className="Login-Page" >
                   <label id="Login" style={{color:""}}>Login</label>
                   <input type="text" placeholder="Username" id="Username" name="user" value={Username} onChange={e => {SetUsername(e.target.value); }} />
                   <div id="underline"></div>
                   <input type="Text" placeholder="Password" id="Password" name="pass" value={Password} onChange={e => SetPassword(e.target.value)} />
                   <input type="submit" className="submit"/>
                </div>
            </form>
           
        </div>
    )

}

export default Login;