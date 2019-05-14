import React, { Component } from 'react';
import Todos from './Todos';
import { Link } from 'react-router-dom';

export class Profile extends Component {
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
        <div>
            <h1>This is the Profile Page</h1>
            <h5>Now that you've started, you cannot leave!</h5>
            {/* <Link to='/'>Log-out</Link> */}
            <Todos todos={this.state.todos} markComplete={this.markComplete}/>
        </div>
        )
    }
}

export default Profile;
