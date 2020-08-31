import React, { Component } from 'react';

import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
    state = {
        username: 'griffinhaley' 
    }  
    

    changeUserNameHandler = (event) => {
        console.log('username is being changed')
        this.setState({username:event.target.value})
    }

  render() {
    return (
      <div>
          <UserInput 
          changed={this.changeUserNameHandler}
          currentName={this.state.username}
          />
          
          <UserOutput 
            username={this.state.username}
            changed={this.changeUserNameHandler.bind(this, "Haley Griffin")}
            >change my username
          </UserOutput>

          <UserOutput 
            username='griffinbryce'
            >cant change me
          </UserOutput>

      </div>
    );
  }
}

export default App;
