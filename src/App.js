import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Quests</h1>

        <Profile />
        
      </div>
    );
  }

  
}

export default App;
