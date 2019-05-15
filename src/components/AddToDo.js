import React, { Component } from 'react';

export class AddToDo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({ title:'' });
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


    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
                
                <input 
                type="text" 
                name ="title" 
                style={{ flex: '10', padding: '5px', borderRadius: '15px' }}
                placeholder="Add Quest ..."
                value={this.state.title}
                onChange={this.onChange}
                />
                
                <input 
                type="submit" 
                value="Submit" 
                className="btn" 
                style={{ borderRadius: '10px', border: '1px solid white', background: 'black', color: 'white', marginLeft: '15px' }} />

            </form>
        )
    }
}

export default AddToDo;