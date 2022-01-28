import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

     <h1>Is Your Birthday Lucky🤔</h1>

     <label for="dob-input" className="dob-label"> Date Of Birth</label>

    <input type="date" id="dob-input"></input>

     <label for="num-input" className="num-label">Lucky Number</label>

     <input type="number" id="num-input" placeholder="  Enter a Number"></input>

     <btn id="checkBtn">Check</btn>

     <p id="displayTxt"></p>
    
        
      </header>
    </div>
  );
}

export default App;
