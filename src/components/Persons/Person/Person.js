import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering')
        return (  
                <Auxiliary>    
                <p key="i1" onClick={this.props.click}>
                I'm a {this.props.name} and I am {this.props.age}  years old!
                </p>
                <p key="i2">{this.props.children}</p>
                <input  key="i3"
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} />
                </Auxiliary> 
            
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

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    chaged : PropTypes.func
};
export default withClass(Person, classes.Person);