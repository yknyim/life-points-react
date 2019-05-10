import React, { Component } from 'react';
import Todos from './Todos';

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
            <Todos todos={this.state.todos} markComplete={this.markComplete}/>
        </div>
        )
    }
}

export default Profile;
