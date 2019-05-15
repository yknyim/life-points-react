import React, { Component } from 'react';
import '../styles/ProfileInfo.css';

export class ProfileInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Samson',
            age: '107',
            gender: 'not human',
            level: 1,
        }
    }
    render() {
        return (
            <div className="Profile">
                <div className="ProfileBox">
                    <div className="ProfilePic"></div>
                    <div className="Stats">
                        <br />
                        <br />
                        {`Level: ${this.state.level}`}
                        <br />
                        <br />
                        {`Exp: ${this.props.completedCount}`}
                    </div>
                    <div className="GeneralInfo">
                        {`Name: ${this.state.name}`}
                        <br />
                        <br />
                        {`Age: ${this.state.age}`}
                        <br />
                        <br />
                        {`Gender: ${this.state.gender}`}
                    </div>

                </div>
            </div>
        )
    }
    
    // static addExp() {
    //     console.log(Profile.state.todos.completed)
    //     if(Profile.state.todos.completed === true) {
    //         return this.state.level += 1
    //     }
    // }
}

export default ProfileInfo;

