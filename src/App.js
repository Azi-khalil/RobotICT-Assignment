import './App.css';
import { useState } from 'react';

function App() {

  const [randomColor, setrandomColor] = useState()
  const [range, setRange] = useState(100)

  const changeColor = () => {
     setrandomColor('#'+Math.floor(Math.random()*16777215).toString(16))    
  }
  const changeRange = (e) => {
     setRange(e.target.value)
  }


   let numbers = []
   let i = 1
    for (i = 1 ; i <= range ; i++){
      numbers[i] =+ i
    }
    
    return (
      <div className="App"> 
        <div className="table">
             <div className="head">
                <h2>This is a list of numbers from 1 to 100, every number divisble by 3 
                      turns into the word "Robot", the ones divisble by 5 turn into the word "ICT" and the ones
                      divisible by both 3 & 5 are turned into the word "Robot ICT"  
                </h2>
                <input onChange={changeRange} placeholder="Set your range"></input>
                <button onClick={changeColor}>Click to change color</button>
             </div>
          <ul className="body">
              {numbers.map((inx, index) => {
                if (inx % 3 === 0 && inx % 5 === 0 ){
                  return <li style ={{backgroundColor: randomColor}} key={index}>RobotICT</li>
                }
                else if (inx % 5 === 0 ){
                  return <li style ={{backgroundColor: randomColor}} key={index}>ICT</li>
                }
                else if (inx % 3 === 0 ){
                  return <li style ={{backgroundColor: randomColor}} key={index}>Robot</li>
                }
                else return <li key={index}>{inx}</li>
                }   
              )}
          </ul>
       </div>
      </div>
    );  
  
}

export default App;
