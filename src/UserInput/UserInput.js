import React from 'react';


//using inline style instead of css beacuse
//we don't have html wrappings
const userInput = (props) => {
    
    const inputStyle = {
        border: '2px solid red'
    };

    return <input 
        type="text" 
        style={inputStyle}
        onChange={props.changed} 
        value={props.currentName} />;
};



export default userInput;