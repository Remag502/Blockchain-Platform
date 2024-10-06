import logo from './logo.svg';
import './App.css';
import BasicExample from './components/BasicExample.jsx';
import { testGetRequest } from './hooks/useFetch.js'

import React, { useState } from 'react'

function App() {

  const [text, setText] = useState('This will change');

  const handleClick = () => {
    testGetRequest().then(text => {
      setText(text);
    });
  };

  return (
    <>
      <h1>{text}</h1>
      <BasicExample />
      <button onClick={handleClick}>Click here</button>
    </>
  );
}

export default App;
