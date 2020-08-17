import React from 'react';
import './Messages.css'

function Messages({ message, timestamp, user, userimage }) {
    return (
        <div className="message">
            <img src={userimage} alt="broken" />
            <div className="message--info">
                <h4>
                    {user} <span className="message--timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default Messages;
