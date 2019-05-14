import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div>
            <h1>Welcome to Level Up!</h1>
            <Link to="/profile">Begin Your Journey</Link>
        </div>
    );
}
