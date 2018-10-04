import React from 'react';
import ReactDOM from 'react-dom';

//const API_KEY = '';

// Create a new component that will produce some HTML.
const App = () => {
  return <div>Hi There!</div>;
}

// Take this component's generated HTML and put it in the page.
//in the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
