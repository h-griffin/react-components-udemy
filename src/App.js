import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
    state = {
        users: [
            { username: 'griffinhaley' },
            { username: 'griffinbryce' },
            { username: 'williamshunter' },
        ]
    }

    changeUserNameHandler = (newName) => {
        this.setState({
            persons: [
                { username: newName, age:18 },                  
                { username: newName, age:22 },
                { username: newName, age:22 },
            ]
        })
    }

  render() {
    return (
      <div>
          <h1>hello</h1>
          <UserInput />
          <UserOutput username={this.state.users[0].username}/>
          <UserOutput username={this.state.users[1].username}/>
          <UserOutput username={this.state.users[2].username}/>
      </div>
    );
  }
}

export default App;
