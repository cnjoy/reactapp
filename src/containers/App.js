import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import '../components/Persons/Person/Person.css';

// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.js';

class App extends Component {

  state = {
    persons: [
    {id:'id1', name: 'Max', age: 28},
    {id:'id2', name: 'Manu', age: 29},
    {id:'id3', name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  }
 

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.userId === id;
    });

    const person ={
       ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons : persons    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
 


  render () {
    let persons = null;
    let btnClass='';

    if (this.state.showPersons) {
      persons = (
          <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.changePersonHandler}
          />
      );
      
      // btnClass = classes.Red;
    
    }

   

    return (
            <div className={classes.App}>
              <Cockpit showPersons={this.state.showPersons}
              persons = {this.state.persons}
              clicked={this.togglePersonHandler}/>
              {persons}
                
          </div>
          );
    }
}

export default App;



