import React, { Component } from 'react'

export class ProfileInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Samson',
            age: '99999',
            gender: 'not human',
        }
    }
    render() {
        return (
        <div>
            {`Name: ${this.state.name}`}
            <br />
            {`Age: ${this.state.age}`}
            <br />
            {`Gender: ${this.state.gender}`}
        </div>
        )
    }
}

export default ProfileInfo;

