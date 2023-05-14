import './App.css';

const name = "Sapan Sidhwani";
var currentYear = new Date().getFullYear();
function App() {
  return (
    <>
      <h1>Created by {name}</h1>
      <h1>Copyright {currentYear}</h1>
    </>
  );
}

export default App;
