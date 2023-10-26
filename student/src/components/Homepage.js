import React, { useState } from 'react';


import { useNavigate } from 'react-router-dom';



export function Student(){

    const[name,setname]=useState("");
    const[Roll,setroll]=useState("");
    const[password,setpass]=useState("");
    const[cpassword,setcpassword]=useState("");
    const rend=useNavigate('');
    const changename=(e)=>{
        const kname=e.target.value;
        setname(kname);


    }
    const changepass=(e)=>{
        const pass=e.target.value;
        setpass(pass);
        

    }
    const changeroll=(e)=>{
        const roll=e.target.value;
        setroll(roll);
        

    }
    const cpass=(e)=>{
        const sec=e.target.value;
        setcpassword(sec);
    }
    const validate=()=>{
        const vali="19z";
        const temp=Roll;
        const store=temp.startsWith(vali);
        console.log(store);
        if(store==true){
            
            rend("/surveypage");
            
        }
    }
        
        
    


    return <div>

        <h3>Register here</h3>
        <label>Name of the Student:   </label>
        <input type='text' value={name} onChange={changename} /> <br></br>
        <label>Roll No of the Student</label>
        <input type='text' value={Roll} onChange={changeroll} /><br></br>
        <label>Set password:</label>
        <input type='password' value={password} onChange={changepass}/><br></br>
        <label>Enter the password again:</label>
        <input type='password' value={cpassword} onChange={cpass}/> <br></br>

        <button onClick={validate}>Register</button>
        
        
    </div>

}