import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//"root" är variablenamn som används för att rita ut html. 
//I index.html (public folder) släpper vi en div som består av root
//sen har vi valt att render "App" dvs i filen App.js har vi en funktion/class som heter "App"
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
 

//App.Js (maincode)
//App.test.Js (unittesting for App.Js)
//App.css (sytling sheet (working globally right now))

//Index.html (base for html -> decide single page or multiple page and so on)
//index.css (sytling sheet (working globally right now))