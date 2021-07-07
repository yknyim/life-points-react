import React, { Component } from 'react';
import '../styles/ProfileInfo.css';

export class ProfileInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Samson',
            age: '107',
            gender: 'Other'
        }
    }

    render() {
        return (

            <div className="Profile">
                <div className="ProfileBox">
                    <div className="ProfilePic"></div>
                    <div className="GeneralInfo">
                        {`Name: ${this.state.name}`}
                        <br />
                        <br />
                        {`Age: ${this.state.age}`}
                        <br />
                        <br />
                        {`Gender: ${this.state.gender}`}
                    </div>
                    <div className="Stats">
                        <br />
                        <br />
                        {`Level: ${this.props.level}`}
                        <br />
                        <br />
                        {`Exp: ${this.props.completedCount}`}
                    </div>
                </div>
            </div>

        )
    }
}

export default ProfileInfo;

