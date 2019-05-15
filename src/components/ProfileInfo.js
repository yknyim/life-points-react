import React, { Component } from 'react';
import Profile from './Profile';

export class ProfileInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Samson',
            age: '107',
            gender: 'not human'
        }
    }

    render() {
        return (      
        <div>
            <div style={{display: 'inline-block'}}>
            {`Name: ${this.state.name}`}
            </div>
            <br />
            <br />
            {`Age: ${this.state.age}`}
            <br />
            <br />
            {`Gender: ${this.state.gender}`}
            <br />
            {`Level: ${this.props.level}`}
            <br />
            {`Exp: ${this.props.completedCount}`}
        </div>
        )
    }
}

export default ProfileInfo;

