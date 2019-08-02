import React, { Component } from 'react'; 
import './App.css';
import Person from './Person/Person.js';

//creating javascript class with the keyword "class"
//and using the "extends" keyword to inherhit from the component object/class
class App extends Component {
  render() {
    return (
        <div className="App">
            <h1>Test of a React App</h1>
            <p>Adding a paragraph</p> 
            <Person name="Martin" age="25" > Using children to display Lists </Person>
            <Person name="Sara" age="24" > My hobbies: Adding children props </Person>
            <Person name="Optiplan" age="12"> is everyone here children? </Person>
        </div>
    );
  }
}

//ES6 feature
//if you import this whole file, you'll simply import this class "App" 
export default App;
