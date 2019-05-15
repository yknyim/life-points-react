import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Header from './components/Header';
// import Home from './components/HomePage';
// import Rewards from './components/Rewards';
import { Route } from 'react-router-dom';


class App extends React.Component {

  render() {
    return (
      <div>
          <Header />
          <Profile />
        {/* <Route exact path='/' component={Home} /> */}
        {/* <Route path='/profile' component={Profile} /> */}
        {/* <Route path='/rewards' component={Rewards} /> */}
      </div>
    );
  }

  
}

export default App;
