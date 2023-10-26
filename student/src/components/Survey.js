import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './Surveypage.css'; 

import { Display } from './Displaydetails';

export function Survey(props){


    const[name,setName]=useState("");
    const[rollno,setRoll]=useState("");
    const[dept,setDept]=useState('');
    const[block,setblock]=useState('');
    const[parentno,setParentno]=useState('');
    const[familyincome,setFamilyincome]=useState('');
    const[mailid,setMailid]=useState('');

    const navigate=useNavigate();


    const changemailid=(e)=>{
        const mailll=e.target.value;
        setMailid(mailll);

    }
    const changename=(e)=>{
        const namee=e.target.value;
        setName(namee);
    }

    const changedept=(e)=>{
        const deptt=e.target.value;
        setDept(deptt);
    }

    const changeroll=(e)=>{
        const roll=e.target.value;
        setRoll(roll);
    }
    const changeparent=(e)=>{
        const parent=e.target.value;
        setParentno(parent);
    }
    const changeblock=(e)=>{
        const blockk=e.target.value;
        setblock(blockk);
    }
    const gotologinpage=()=>{

        navigate('/login');
     }
    

    const gotodiplaypage=()=>{
        props.setsname(name);
        props.setsblock(block);
        props.setsroll(rollno);
        props.setSmail(mailid);
        props.setsparent(parentno);
        navigate('/display');


    }








    return <div className='surveypage'>
        <h1>To complete the registration please follow up the completion of survey page</h1>
        <h2>Student Deatils</h2>
        <div className='inside'>
        <form onSubmit={gotologinpage}>
            <label >Name of the student:</label>
            
            <input className='box'

            type='text'
            id='name'
            value={name}
            onChange={changename}
            
            />

            <br></br>

            <label>Student Roll No:</label>
            
            <input className='box'
            type='Number'
            value={rollno}
            onChange={changeroll}/>

            <br></br>
            <label  >Choose your Dept</label>
            <select id="dropdown" className='box'>


                <option onClick={changedept} value="Cse">cse</option>
                <option onClick={changedept} value="EEE">EEE</option>
                <option onClick={changedept} value="ECE">ECE</option>
                <option onClick={changedept} value="mechanical">mechanical</option>
           </select>
           
        
           <br></br>
            <label>Enter Your hostel block details</label> 
            <input
            className='box'

            type='text'
            value={block}
            onChange={changeblock}
            
            
            
            
            
            />
           <br></br>
            
            <label>Enter your parent Phone no :</label> 
            <input
            className='box'

            type='text'
            value={parentno}
            onChange={changeparent}
            
            
            
            />
           <br></br>
            
            
            <label>Enter the mailid:</label>
            
            

            <input  className='box'

            type='text'
            value={mailid}
            onChange={changemailid}
            
            
            
            
            />



           <br></br>

           <input  type='submit'/>

            
        </form>

        </div>

    </div>
}