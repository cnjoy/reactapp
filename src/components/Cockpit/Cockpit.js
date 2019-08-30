import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    
    const assignedClasses = [];
    let btnClass = '';
  //  btnClass = classes.Red;
    if( props.showPersons ) {
        btnClass = classes.Red;
    }
    if(props.persons.length <=2) {
      assignedClasses.push(classes.red); // casses = ['red']
    }
    if(props.persons.length<=1) {
      assignedClasses.push(classes.bold); // casses = ['red',  'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App - {props.title}</h1>
            <p className={assignedClasses.join('  ')}>This is really working!</p>
            <button className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;