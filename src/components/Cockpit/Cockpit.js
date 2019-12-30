import React from 'react';
import CockpitStyle from './Cockpit.module.css'

const cockpit = (props) => {

    //------setting class names dynamically-----//
    const assignedClasses = [];
    let styleButton = '';
    
    if(props.showPersons)
        styleButton = CockpitStyle.Red;

    if(props.persons.length <= 2)
        assignedClasses.push(CockpitStyle.red); //classes = ['red']

    if(props.persons.length <=  1)
        assignedClasses.push(CockpitStyle.bold); //classes = ['red', 'bold']
    
    //------setting class names dynamically-----//

    return(
        <div className={CockpitStyle.Cockpit}>
            <h1>{props.title}</h1> 
            <p className={assignedClasses.join(' ')}>Adding a paragraph</p> 
            <button 
                className={styleButton} 
                onClick={props.clicked}>
                Toggle person
            </button>
        </div>
    );
} 


export default cockpit;