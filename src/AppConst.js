import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

const app = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  });

  const [otherState, setOtherState] = useState('some other value');
  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DONT DO THIS:
    // this.state.persons[0].name= "Maximilian";
    setPersonsState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 27}
      ]
    
    });
  };

  return (
  <div className="App">
    <h1>Hi, I'm a React App</h1>
    <p>This is really working!</p>
    <button onClick={switchNameHandler.bind(setPersonsState, 'Maximilian')}>Switch Name</button>
    <Person 
    name={personsState.persons[0].name} 
    age={personsState.persons[0].age}/>
    <Person 
    name={personsState.persons[1].name} 
    age={personsState.persons[1].age}
    click={switchNameHandler.bind(setPersonsState, 'Max!')}
    >My Hobbies: Racing</Person>
    <Person 
    name={personsState.persons[2].name} 
    age={personsState.persons[2].age}/>

  </div>
);
}


export default app;



