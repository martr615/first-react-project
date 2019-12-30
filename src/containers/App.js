import React, { Component } from 'react'; 
import './App.css';
import Persons from '../components/Persons/Persons'; 
import Cockpit from '../components/Cockpit/Cockpit';

//creating javascript class with the keyword "class"
//and using the "extends" keyword to inherhit from the component object/class
class App extends Component {

  //att definera state funkar bara i class som har extends Component
  //man kan definera vad som helst i en state, tex har vi skapat en 
  //array med personer
  state = {
    persons: [
      { id: 'asdas1', name: 'Martin', age: 25},
      { id: 'asdas11', name: 'Sara', age: 24},
      { id: 'asdas111', name: 'Optiplan', age: 16},
    ],
    otherState: 'Wont be affected in switchNameHandler if we dont directly define to do it',
    showPersons: false
  }

  //define a normal function
  //using .setState() to allow update props in the DOM
  //in the .setState() decides what to be updated
  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });

    //creating a new javascript object/array
    const person = {
      //... = fetching dvs typ som copy
      //=> tar allt från this.state.persons[personIndex] 
      //och assign till const person
      ...this.state.persons[personIndex]
    }; 

    //can manipulate person without changing the original object/array
    person.name = event.target.value;
 
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }
 
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];    
    persons.splice(personIndex, 1) //ta bort antalet i array med start på indexet
    this.setState({persons: persons})
  }  


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow });
  }



  //this call upon the state/functions in the class
  render() {   

    //map i javascript är som select för linq
    let persons = null;

    if(this.state.showPersons)
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />

    return (
        <div className="App">
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons} 
            persons={this.state.persons} 
            clicked={this.togglePersonsHandler}/>
          {persons}
        </div>
    );
  }
}

//ES6 feature
//if you import this whole file, you'll simply import this class "App" 
export default App;
