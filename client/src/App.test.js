import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//TODO: Write a test to see if handleChange is triggered from the form input.
//TODO: Write a test to see if handleSubmit is triggered from the button input
//TODO: Write a test to see if handleChange setsState.
//TODO: Write a test to see if handleSubmit calls axios.
//TODO: Write a test to see if handleSubmit setsState.

