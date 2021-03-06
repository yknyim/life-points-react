import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export class Todos extends Component {

    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} addExp={this.props.addExp} delTodo={this.props.delTodo} completedTodo={this.props.completedTodo}/>
        ));
    }
    }

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos
