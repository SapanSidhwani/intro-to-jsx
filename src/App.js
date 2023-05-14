import './App.css';

const name = "sapan";
const number = "3";
function App() {
  return (
    <>
      <h1>Hello {name}</h1>
      <h2>Your Lucky Number is {Math.floor(Math.random() * 10) + 1}</h2>
      <ul>
        <li>Paneer</li>
        <li>Noodles</li>
        <li>Mushrooms</li>
      </ul>
    </>
  );
}

export default App;
