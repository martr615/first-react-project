import React from 'react';



//Syntax to create a function with ES6
//props kan du döpa till vad som helst. 
//props tar alla argument som man skickar in.
const person = (props) => {
	return (
		<div>
			<p> I'm {props.name} and I am {props.age} years old! </p>
			<p> {props.children}  </p>
		</div>
	)
}

export default person;