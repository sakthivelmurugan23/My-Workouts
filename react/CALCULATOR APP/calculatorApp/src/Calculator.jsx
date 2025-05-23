import React, { useState } from 'react';
import './Calculator.css';  // You can style it with CSS

const Calculator = () => {
  const [input, setInput] = useState('');
  console.log(input);
  

  // Function to handle button clicks
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Function to handle clearing the input
  const handleClear = () => {
    setInput('');
  };

  // Function to handle the calculation
  const handleCalculate = () => {
    try {
      setInput(eval(input)); // Calculate the result
    } catch (error) {
      setInput('Error'); // In case of an invalid expression
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClear()}>C</button>
        <button onClick={() => handleCalculate()}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
