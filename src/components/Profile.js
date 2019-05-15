import React, { Component } from 'react';
import Todos from './Todos';
import { Link } from 'react-router-dom';

import AddToDo from './AddToDo';
import ProfileInfo from './ProfileInfo';
import newId from '../utils';


export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            ],
            exp: 0
    }
    }

    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }) });
    }

    addToDo = (title) => {
        const newTodo = {
            id: newId(),
            title,
            completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo]})
    }

    delTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)], exp: this.state.exp - 20 });
    }

    completedTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)], exp: this.state.exp + 20 });
    }

    // addExp = () => {
    //     this.setState({
    //         exp: this.state.exp + 1
    //     })
    // }

    render() {
        
        return (
        <div>

            <ProfileInfo completedCount={this.state.exp}/>
            <h3>Quests</h3>
            {/* <Link to='/rewards'>Rewards</Link> */}
            {/* {' | '} */}
            {/* <Link to='/'>Log out</Link> */}
            <AddToDo addToDo={this.addToDo}/>
            <Todos todos={this.state.todos} markComplete={this.markComplete} addExp={this.addExp} delTodo={this.delTodo} completedTodo={this.completedTodo}/>

        </div>
        )
    }
}

export default Profile;
