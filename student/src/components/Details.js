import React from 'react';

export function Dsiplayy(props){


    const styling={
        
    }
    return <div className='App'>
        <h3>Details of {props.name}</h3>
        <p>Name of the student : {props.name}</p>
        <p>Roll no : {props.roll}</p>
        <p>Department : {}</p>
        <p>Hostel Block : {props.blockname}</p>
        <p>Parent phone no : {props.paren}</p>
        <p>studen mail Id : {props.mail}</p>
    </div>
}