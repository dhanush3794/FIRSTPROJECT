import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Display(props){
    const nav=useNavigate();



    const gotofun=()=>{
        nav("/showdetails");
    }
    return <div className='App'>
        <p>Thanks for your survey {props.name}</p>
        <p>would You like to see the Details pf yours</p>
        <button onClick={gotofun}>yes</button>
        <button onClick={gotofun}>NO</button>
    </div>
}