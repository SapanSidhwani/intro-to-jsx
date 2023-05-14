import './App.css';
import React from 'react';

import PI, { doublePI, triplePI } from './Math';
/*

another way of using above line code  

import * as pi from './Math';

---- How to use it ------
pi.PI()
pi.doublePI()
pi.triplePI()

*/

import Heading from './components/Heading';

function App() {
    return (
      <>
        <Heading />
        <ul>
          <li>{PI()}</li>
          <li>{doublePI()}</li>
          <li>{triplePI()}</li>
        </ul>
      </>
    );
  }

export default App;
