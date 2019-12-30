import React from 'react';
import Person from './Person/Person';

const persons = (props) => 
	props.persons.map((person, index) => {
		return <Person 
			  click={() => props.clicked(index)}
			  name={person.name} 
			  age={person.age} 
			  key={person.id} //so react only renders the one needed and not the whole list
			  changed={(event) => props.changed(event, person.id )} />
	  });

export default persons;