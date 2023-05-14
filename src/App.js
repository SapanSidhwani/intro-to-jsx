import './App.css';

var customStyle = {
  color: "red",
  fontSize: "24px",
  border: "5px solid black"
};

customStyle.color = " blue";

function App() {
  return (
    <>
      <h1 style={customStyle}>Hello World</h1>
    </>
  );
}

export default App;
