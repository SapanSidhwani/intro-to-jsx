import './App.css';

var image = "https://picsum.photos/200/100";

function App() {
  return (
    <>
      <h1 className='heading' contentEditable="true" spellCheck="false">My favourite images</h1>
      <div>
        <img className='adventure-img' src={image} alt="lorem images" />
        <img className='adventure-img' src={image + "?grayscale"} alt="lorem images" />
        <img className='adventure-img' src={image + "?blur"} alt="lorem images" />
      </div>
    </>
  );
}

export default App;
