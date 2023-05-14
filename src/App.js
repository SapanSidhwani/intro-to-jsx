import './App.css';

var hour = new Date().getHours();
var greeting = "";
var customStyle = {
  color: ""
};

if(hour < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
}
else if(hour < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
}
else {
  greeting = "Good Evening";
  customStyle.color = "blue";
}

function App() {
  return (
    <>
      <h1 className='heading' style={customStyle}>{greeting}</h1>
    </>
  );
}

export default App;
