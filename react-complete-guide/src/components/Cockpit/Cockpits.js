import React from 'react';
import classes from './Cockpit.css'
const cockpit = (props) =>
{
    const assignedClasses = [];
    let btnClass ='';
    if(props.showPersons)
    {
        btnClass = classes.Red;
    }
    if(props.person.length <=2)
    {
      assignedClasses.push(classes.red);
    }
    if(props.person.length <=1)
    {
      assignedClasses.push(classes.bold);
    }
    
    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I am react app</h1>
            <p className={assignedClasses.join(' ')}>This is a working app</p>
            <button  className={btnClass} onClick={props.clicked}>
            Hide / Unhide
            </button>
        </div>
    );
}

export default cockpit;
