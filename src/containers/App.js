import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import '../components/Persons/Person/Person.css';

// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.js';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor...');
  }
  static getDerivedStateFromProps(props,state) {
    console.log('[App.js] getDerivedStateFromProps...', props);
    return state;
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount...');
    return true;
  }
  componentDidMount() {
    console.log('[App.js] componentDidMount...');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }
  state = {
    persons: [
    {id:'id1', name: 'Max', age: 28},
    {id:'id2', name: 'Manu', age: 29},
    {id:'id3', name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  }
 

  nameChangeHandler = (event, id) => {
   
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
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
    console.log('[App.js] rendering...');
    let persons = null;
    
    if (this.state.showPersons) {
      persons = (
          <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
      );
      
      // btnClass = classes.Red;
    
    }

   

    return (
            <div className={classes.App}>
              <button onClick={()=>{
                this.setState({showCockpit: false})
                }}
              >Remove Cockpit</button>
              {this.state.showCockpit ? 
              <Cockpit 
              title ={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength = {this.state.persons.length}
              persons = {this.state.persons}
              clicked={this.togglePersonHandler}/>
              : null}
              {persons}
                
          </div>
          );
    }
}

export default App;



