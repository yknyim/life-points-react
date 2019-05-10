import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
        completed: false
      },
      {
        id: 2,
        title: 'Clean room',
        completed: false
      },
      {
        id: 3,
        title: 'Laundry',
        completed: false
      }
    ]
  }

  markComplete = () => {

  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
