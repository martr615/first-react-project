import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

//"root" �r variablenamn som anv�nds f�r att rita ut html. 
//I index.html (public folder) sl�pper vi en div som best�r av root
//sen har vi valt att render "App" dvs i filen App.js har vi en funktion/class som heter "App"
ReactDOM.render(<App appTitle="Person Manager"/>, document.getElementById('root'));
registerServiceWorker();
 

//App.Js (maincode)
//App.test.Js (unittesting for App.Js)
//App.css (sytling sheet (working globally right now))

//Index.html (base for html -> decide single page or multiple page and so on)
//index.css (sytling sheet (working globally right now))