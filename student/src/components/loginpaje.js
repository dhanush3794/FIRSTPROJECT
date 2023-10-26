import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Login(){
    const[name,setname]=useState();
    const[roll,setroll]=useState();
    const[password,setpass]=useState();

    const navigate=useNavigate();


    const changename=(e)=>{
        const namee=e.target.value;
        setname(namee);
        

    }
    const changeroll=(e)=>{
        const roll=e.target.value;
        setroll(roll);
    }
    const changepasss=(e)=>{
        const passs=e.target.value;
        setpass(passs);
    }
    const checkcredentials=()=>{
        navigate('/Welcome');
    }
    return <div>
        <h3>Login Page</h3>
        <label>Enter your Name :</label>
        <input type='text' value={name} onChange={changename}/> <br></br>
        <label>Enter Your College Id</label>
        <input type='text' value={roll} onChange={changeroll}/> <br></br>
        <label> Enter the password:</label>
        <input type='password' value={password} onChange={changepasss}/> <br></br>

        <button onClick={checkcredentials}> Login</button>

    </div>

}