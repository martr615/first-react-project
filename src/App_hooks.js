import React, { useState } from 'react'; 
import './App.css';
import Person from './Person/Person.js';

//using the new syntax hooks
//we no longer need class extends Component
//we no longer need Render in the "class" beacuse now it's a function
const AppHooks = props => {

  //defining like this: const [] = ... is a feature called array destructuring
  //this allows you to pull elements out of the array you get back from
  //the right side of the equal sign of this function call
  const [ personState, setPersonsState] = useState({
    persons: [ 
      { name: 'Martin', age: 25},
      { name: 'Sara', age: 24},
      { name: 'Optiplan', age: 16},
    ],
    cantTouchThis: 'Wont be affected in switchNameHandler if we dont directly define to do it'
  });
  
  //need to define below if we want to keep cantTouchThis when using state hooks
  //cantTouchThis: personState.cantTouchThis
  const [cantTouchThisState, setCantTouchThisState] = useState({
    cantTouchThis: personState.cantTouchThis
  })


  //in javascript you can have a function inside a function
  const switchNameHandler = () => {
    setPersonsState({    
      persons: [
        { name: 'Martin Tran', age: 25},
        { name: 'Sara', age: 24},
        { name: 'Optiplan', age: 16}
      ],

    })
  }

  return (
      <div className="App">
          <h1>Test of a React App</h1>
          <p>Adding a paragraph</p> 
          <button onClick={switchNameHandler}>Switch Name</button>
          <Person name={personState.persons[0].name} age={personState.persons[0].age} > Using children to display Lists </Person>
          <Person name={personState.persons[1].name} age={personState.persons[1].age} > </Person>
          <Person name={personState.persons[2].name} age={personState.persons[2].name}> </Person>
      </div>
  );

}

export default AppHooks;


//difference with react hook using useState compared with class extends component
//is that in this case when using the switchNameHandler
//cantTouchThis in useState will dissapear because it's replaces the old state all togehter
//in class extends Component the state will be updated only so it wont be replaced