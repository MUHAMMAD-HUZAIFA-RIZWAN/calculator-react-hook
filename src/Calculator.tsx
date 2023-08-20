"use client"
import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    if (!isNaN(parsedNum1) && !isNaN(parsedNum2)) {
      let calculatedResult;

      switch (operation) {
        case '+':
          calculatedResult = parsedNum1 + parsedNum2;
          break;
        case '-':
          calculatedResult = parsedNum1 - parsedNum2;
          break;
        case '*':
          calculatedResult = parsedNum1 * parsedNum2;
          break;
        case '/':
          if (parsedNum2 !== 0) {
            calculatedResult = parsedNum1 / parsedNum2;
          } else {
            setResult('Cannot divide by zero');
            return;
          }
          break;
        default:
          setResult('Invalid operation');
          return;
      }

      setResult(calculatedResult.toString());
    } else {
      setResult('Invalid input');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold  bg-blue-700" >CALCULATOR USING REACT HOOK</h1>
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="number"
          placeholder="Enter number"
          className="w-20 p-2 border border-gray-300 rounded"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <select
          className="p-2 border border-gray-300 rounded"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="number"
          placeholder="Enter number"
          className="w-20 p-2 border border-gray-300 rounded"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleCalculate}
        >
          Calculate
        </button>
      </div>
      <p className="text-xl font-bold">{result}</p>
    </div>
  );
};

export default Calculator;
