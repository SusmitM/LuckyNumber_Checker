import{useState,useRef} from "react";
import './App.css';

function App() {
  const[display, setDisplay]=useState("");


const numInput = useRef(null);
const dobInput = useRef(null);

const calculateSum =(inputDob)=>{
  const selectedDateValue = inputDob.split('-');
  const joinedDateValue = selectedDateValue.join('');
  var sum =0;
  for( let i=0;i<joinedDateValue.length;i++){
  var element =+joinedDateValue[i];
  sum= sum+element;
}
return sum;

};
const checkNumberLucky = (sumofDate, inputVal) =>{
  const result=sumofDate%inputVal;
console.log(result);
  if(result===0){
     return setDisplay(inputVal+" is a lucky number!! 🥳 ");
  }
  if(result!==0){
     return setDisplay(inputVal+" is not that lucky 😕")
  }

};

const clickCheck=() =>{
   const inputVal = numInput.current.value;
   const inputDob = dobInput.current.value;
   if(inputVal && inputDob ){
     const sumofDate = calculateSum(inputDob);
     checkNumberLucky(sumofDate, inputVal);
   }
   else{
    setDisplay(" INVALID INPUT!!! ");

   }
   





};

  return (
    <div className="App">
      <header className="App-header">

     <h1>Is Your Birthday Lucky🤔</h1>

     <label for="dob-input" className="dob-label"> Date Of Birth</label>

    <input type="date" id="dob-input" ref={dobInput}></input>

     <label for="num-input" className="num-label">Lucky Number</label>

     <input type="number" id="num-input" placeholder="  Enter a Number" ref={numInput}></input>

     <button id="checkBtn" onClick={clickCheck}>Check</button>

     <span className="output">{display} </span>
    
        
      </header>
    </div>
  );
}

export default App;
