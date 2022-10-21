import React, {useState} from 'react';
import './App.css';
import Number from "./Number/Number";

function App() {
  let array: number[] = [];
  function sortedArray(a: number, b: number) {
    return a - b;
  }
  const getRandomNumbers = () => {
    for (let i = 0; i < 5; i++) {
      let pass = false;
      const random = Math.floor(Math.random() * 32 + 5);
      for (let i = 0; i < 5; i++) {
        if (random === array[i]) {
          pass = true;
          getRandomNumbers();
        }
      }
      if (!pass) {
        array.push(random);
        array.sort(sortedArray);
      }
    }
  };

  const [number, setNumber] = useState<number[]>([]);

  const changeNumber = () => {
    getRandomNumbers();
    setNumber(array);
  };


  return (
    <div className="App">
      <button onClick={changeNumber}>New numbers</button>
      <Number value={number[0]}/>
      <Number value={number[1]}/>
      <Number value={number[2]}/>
      <Number value={number[3]}/>
      <Number value={number[4]}/>
    </div>
  );
}

export default App;
