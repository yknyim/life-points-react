import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            display: 'flex',
            justifyContent: 'center',
            background: 'f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
            <p style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                <div style={{display: 'flex', justifyContent: 'flex-start', marginRight: '20px'}}>
                    <button onClick={this.props.completedTodo.bind(this, id)} style={btnStyleO}>O</button>
                </div>
                { title }
                <div style={{ marginLeft: '20px' }}>
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyleX}>X</button>
                </div>
                
            </p>
            </div>
        )
    }
}

    // height: 53px;
    // margin: 5px;
    // padding:15px 25px;
    // outline: none;
    // transition: 0.3s;
    // text-align: center;
    // font-size: 20px;
    // background: rgba(250, 250, 250, 0.8);
    // color: black;
    // border-radius: 15px;
    // border: 5px solid black;



const btnStyleO = {
    background: 'black',
    color: 'green',
    borderRadius: '15px',
    border: '1px solid green',
    // padding: '9px 10px',
    // borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

const btnStyleX = {
    background: 'black',
    color: 'red',
    borderRadius: '15px',
    border: '1px solid red',
    // padding: '9px 10px',
    // borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
