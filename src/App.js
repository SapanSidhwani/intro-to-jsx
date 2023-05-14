import './App.css';
import React from 'react';
import PI, { add, multiply, subtract, divide } from './Math';
import Heading from './components/Heading';

function App() {
  return (
    <>
      <Heading />
      <ul>
        <li> {PI()} </li>
        <li> {add(15, 3)} </li>
        <li> {multiply(15, 3)} </li>
        <li> {subtract(15, 3)} </li>
        <li> {divide(15, 3)} </li>
      </ul>
    </>
  );
}

export default App;
