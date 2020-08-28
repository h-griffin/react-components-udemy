import React, { Component } from 'react';

import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
    state = {
        users: [
            { username: 'griffinhaley' },
        ]
    }

    changeUserNameHandler = (event) => {
        this.setState({
            users: [
                { username: event.target.value, age:18 },                  
                { username: event.target.value, age:22 },
                { username: event.target.value, age:22 },
            ]
        })
    }

  render() {
    return (
      <div>
          <UserInput />
          
          <UserOutput 
            username={this.state.users[0].username}
            // changed={this.changeUserNameHandler} 
            changed={this.changeUserNameHandler.bind(this, "Haley Griffin")}
        >text</UserOutput>

      </div>
    );
  }
}

export default App;
