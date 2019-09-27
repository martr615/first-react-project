import React, { Component } from 'react'; 
import './App.css';
import Person from './Person/Person.js'; 

//creating javascript class with the keyword "class"
//and using the "extends" keyword to inherhit from the component object/class
class App extends Component {

  //att definera state funkar bara i class som har extends Component
  //man kan definera vad som helst i en state, tex har vi skapat en 
  //array med personer
  state = {
    persons: [
      { name: 'Martin', age: 25},
      { name: 'Sara', age: 24},
      { name: 'Optiplan', age: 16},
    ],
    cantTouchThis: 'Wont be affected in switchNameHandler if we dont directly define to do it'
  }

  //define a normal function
  //using .setState() to allow update props in the DOM
  //in the .setState() decides what to be updated
  switchNameHandler = (newName) => {
    this.setState({    
      persons: [
        { name: newName, age: 25},
        { name: 'Sara', age: 24},
        { name: 'Optiplan', age: 16}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({    
      persons: [
        { name: event.target.value, age: 25},
        { name: 'Sara', age: 24},
        { name: 'Optiplan', age: 16}
      ]
    })
  }

  //this call upon the state/functions in the class
  render() {
    return (
        <div className="App">
            <h1>Test of a React App</h1>
            <p>Adding a paragraph</p> 
            <button onClick={this.switchNameHandler.bind(this, 'Mar')}>Switch Name</button>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} 
              //passing a whole fucking function
              click={() => this.switchNameHandler('Tin!!!')} 
              changed={this.nameChangedHandler}/> 
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age} > passing children </Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].name}> </Person>
        </div>
    );
  }
}

//ES6 feature
//if you import this whole file, you'll simply import this class "App" 
export default App;
