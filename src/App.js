import{useState,useRef} from "react";
import { FaGithub} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn} from "react-icons/fa";

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
// console.log(result);
  if(result===0){
     return setDisplay("Your birthday is lucky !! 🥳 ");
  }
  if(result!==0){
     return setDisplay("Your birthday is not lucky 😕")
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
    setDisplay(" ENTER ALL THE FIELDS !!! ");

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
     <span id="privacyPolicy">Privacy Policy: We do not store any of your Data. </span>
    
        
      </header>
      <footer class="footer">
        <span class="fText">© | 2022 | SusmitMukherjee</span>
        <a href="https://github.com/Snow-Bull/LuckyNumber_Checker" target="_blank">  < FaGithub  class="fIcon"/> </a> 
        <a href="https://twitter.com/SusmitMukherje5" target="_blank">  < FaTwitter  class="fIcon"/> </a>
        <a href="https://www.linkedin.com/in/susmit-mukherjee-5aa8211b5/" target="_blank">  < FaLinkedinIn  class="fIcon"/> </a>



      </footer>
    </div>
  );
}

export default App;
