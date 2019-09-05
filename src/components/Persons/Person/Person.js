import React, { Component, Fragment } from 'react';

import Aux from '../../../hoc/Auxiliary';
import classes from './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering')
        return (  
                <Aux>    
                <p key="i1" onClick={this.props.click}>
                I'm a {this.props.name} and I am {this.props.age}  years old!
                </p>
                <p key="i2">{this.props.children}</p>
                <input  key="i3"
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} />
                </Aux> 
            
         );
    }
}

/*
const person = (props) => {
    console.log('[Person.js] rendering...');
    return (
        <div className= {classes.Person} >
            <p onClick={props.click}>I'm a {props.name} and I am {props.age}  years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    
    )
};
*/

export default Person;