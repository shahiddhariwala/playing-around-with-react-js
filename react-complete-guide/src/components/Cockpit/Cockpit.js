import React, { useEffect } from "react";
import classes from "./Cockpit.css";
const cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    /*
    This is not a lifecycle hook,
    this is a React hook
    So useEffect runs here, it runs for every update and
    this means we can already use it for
    all the things we would have done in componentDidUupdate and indeed that is OK.
     If you need to send
    an HTTP request or anything like that in here, 
    you can do that. It also obviously runs when the
    component is created,  
    
    Empty arrays will execute oinly for dependency change*
    */
   setTimeout(() => {
    alert('Saved data to cloud!');
  }, 1000);
  return () => {
    console.log('[Cockpit.js] cleanup work in useEffect');
  };
  },[]);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });
  
  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is a working app</p>
      <button className={btnClass} onClick={props.clicked}>
        Hide / Unhide
      </button>
    </div>
  );
};

export default React.memo(cockpit);
