import React from 'react';

import './UserInput.css'

const UserInput = (props) => {
    const inputStyle={
        padding: '2px 2px',
        
    }

    return (
        <div className='UserInput'>
            <p>change username:</p>
            <input
                type="text" 
                style={inputStyle}
                onChange={props.changed} 
                value={props.currentName} />
            <br></br>
            <br></br>
        </div>
    )
}

export default UserInput;