import React, { useState } from "react";

const LoginForm = ({onLogin}) =>{

const[username,SetUsername] =useState("")
const[password, SetPassword]=useState("")

function handleSubmit(e){
    e.preventDefault();
    if(username.trim()){
        console.log("username:",username)
                console.log("password:", password)


        
        onLogin(username)

    }
};
return(
    <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e)=>SetUsername(e.target.value)}
        />
        
        <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e)=>SetPassword(e.target.value)}
        />
        <button type="submit">Login</button>

    </form>
);


    
};
export default LoginForm;
