# React project
Learning react, testing and building single page application.

###### Basic react
* React is all about creating components (basically custom html elements).
* Every react component (a function) always has to return jsx code which can be rendered to the Dom.
* React using lowercase reserved for html, so name variable with Uppercase in the first letter

###### jsx
* Looks like html but is not => it's javascript.

###### Props
* Props can be named whatever and it's the argument you send to a function
* Props can send a whole function/method into a function


###### State 
* State makes it possible to change your component at runtime.
* Use state with care, meaning use functional component as often as possible
* To use state: class-based component => "class extends Component" 
* class extends component has been the only way to manage state but since React 16.8 there has been a new way: functional component with React hooks

###### React hooks
* Collection of functions exposed to you by React which you can use in functional components
* Needs to import useState 
* With hooks you should have multiple state calls instead of one big slice like class extends Component 

###### Stateless vs Stateful
* Stateless/presentational/dumb component is a function/class that doesn't manage states: use stateless as much as you can
* Stateful/container/smart component is a function/class that manages states: use stateful only when needed


###### Radium
* npm install --save radium
* Radium is a third party lib about style that makes it possible to use media queries and sudo selectors in normal javascript inline styles. 
* To use: import Radium to file and define Radium as a higher order component, e.g. export default Radium(app);
* If you want to use media queries, transformation and animation you need to import Radium and wrap the entire application with a component from Radium. E.g. Import Radium, {StyleRoot} from 'radium'; then wrap the application with <StyleRoot></StyleRoot> 


###### Styled components
* npm install --save styled-components
* Another third party lib about styling components
* with styled-components we skip tags => <div></div> becomes styled.div`` 
* using styled components to make it possible to have .css code in one file wtih .js code instead of creating a .css file
* styled components is good if you want to implement dynamic styles 
* styled components is good if you want to mix css with javascript syntax

###### CSS Modules
* change .css files to fileName.module.css and import as import className from './fileName.module.css'
* https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8111608#overview


###### Error boundary
* Only use errorboundary when you know it might fail but it's out of your control such as reaching out to the web