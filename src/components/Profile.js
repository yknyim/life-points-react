import React, { Component } from 'react';
import Todos from './Todos';
import AddToDo from './AddToDo';
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
            ]
    }
    }

    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo;
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
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    }

    render() {
        
        return (
        <div>
            <AddToDo addToDo={this.addToDo}/>
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
        )
    }
}

export default Profile;
