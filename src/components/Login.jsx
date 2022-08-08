import React,{useState} from 'react';

function Login(){
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");

    const trackEmail=function(e){
        setEmail(e.target.value);
    }

    const trackPassword=function(e){
        setPassword(e.target.value);
    }

    const printDetails =function(e){
        alert(email+" "+password);
    }
    return{
        <input type="email" onChange={trackEmail} value={email} placeholder="email"></input>
        <input type="password" onChange={trackPassword} value={password} placeholder="password"></input>
        <input type="submit" onSubmit={printDetails}>Login</input>
    }
}

export default Login