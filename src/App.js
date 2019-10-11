import React, { Component } from 'react'; 
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

//creating javascript class with the keyword "class"
//and using the "extends" keyword to inherhit from the component object/class
class App extends Component {

  state = {
    username: 'placeholder'
  }

  userNameChangeHandler = (event) => {
     this.setState({username: event.target.value})
  }

  render(){
    return(
      <div className="App">
        <UserInput changed={this.userNameChangeHandler} currentName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Programmer" />
        <UserOutput userName="Martin" />
      </div>
    );
  }
}
 
//ES6 feature
//if you import this whole file, you'll simply import this class "App" 
export default App;
