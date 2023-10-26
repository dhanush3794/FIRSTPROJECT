import React from "react";
import { useNavigate } from "react-router-dom";


export function Intro(){
    const navigate=useNavigate();
    const gotoregistrationpage=()=>{
        navigate("/registration");
    }
    const gotologinpage=()=>{
        navigate("/Welcome");
    }
    return <div>
        <button onClick={gotoregistrationpage}>Registartion page</button>
        <button onClick={gotologinpage}>if already registered and submitted the survey, Go to Login page</button>
        
    </div>
}