import { Item } from 'components/InfiniteScrollList/style';
import React, { useEffect, useState } from 'react';

const InterviewQuestions = () => {
  const [number, setNumber] = useState(0)

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      console.log('1 second has passed');
    }, 1000);
    return () => {
      window.clearInterval(timer);
    };
  }, [])

  const isPalindromeString = (str) => {
    const palindromeString = str.split('').reverse().join('');
    return str === palindromeString;
  }

  const uniqueNumberItems = (arr)=> {
    let uniqueDatas= [];
    arr.forEach((d) => {
      if (uniqueDatas.indexOf(d) === -1) {
        uniqueDatas.push(d);
      }
    })
    return uniqueDatas;
  }

  const findMaxDuplicatieChar = (str) => {
    if (str.length === 1) return str ;
    let charObj = {};
    let maxChar = '';
    let maxNumber = 1;
    for (let i = 0; i < str.length; i++) {
      if (!charObj[str.charAt(i)]) {
        charObj[str.charAt(i)] = 1;
      } else {
        charObj[str.charAt(i)] += 1;
      }
    }
    for (let i in charObj) {
      if (charObj[i] > maxNumber) {
        maxNumber = charObj[i]
        maxChar = i;
      }
    }
    return maxChar;
  }

  const bubbleSort = (arr) => {
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
      for (let j = 0; j < (arrLength - i - 1); j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
      }
    }
    return arr;
  }

  const swapTwoItems = (a, b) => {
    b = b - a;
    a = a + b;
    b = a - b;
    return [a, b]
  }
  const getFibonacci = (n) => {
    let fibarr = [];
    let i = 0;
    while(i < n) {
      if (i <= 1) {
        fibarr.push(i);
      } else {
        fibarr.push(fibarr[i - 1] + fibarr[i - 2])
      }
      i++
    }
    return fibarr;
  }

  const getMaxProfit = (arr) => {
    let minPrice = arr[0];
    let maxProfix = 0;
    arr.forEach((d, i) => {
      const currentPrice = d;
      minPrice = Math.min(minPrice, currentPrice)
      let potentialProfit = currentPrice - minPrice;
      maxProfix = Math.max(maxProfix, potentialProfit);
    })
    return maxProfix;
  }

  const numbers = [1,13,24,11,11,14,1,2];
  const strings = 'dddddddddddssssfffsenas';

  const getPascalTriangleeNumbers = (numRows) => {   
    let result = [[1]];
    for(let i = 1; i < numRows; i++) {
      result[i] = [];
      for(let j = 0; j < i + 1;j++) {
        result[i][j] = (result[i - 1][j] || 0) + (result[i - 1][j - 1] || 0);
      }
    }
    return result;
  }

  return (
    <div style={{ padding: '20px 40px'}}>
      <h2>[Q1] isPalindromeString</h2>
      <p>{`mamam is palindrome => ${isPalindromeString('mamam')}`}</p>
      <p>{`Hello is palindrome => ${isPalindromeString('Hello')}`}</p>
      <h2>[Q2] uniqueStringItems</h2>
      <p>{`${numbers} => ${uniqueNumberItems(numbers)}`}</p>
      <h2>[Q3] findMaxDuplicatieChar</h2>
      <p>{`${strings} => ${findMaxDuplicatieChar(strings)}`}</p>
      <h2>[Q4] bubbleSort</h2>
      <p>{`${numbers} => ${bubbleSort(numbers)}`}</p>
      <h2>[Q5] swapTwoItems</h2>
      <p>{`3,4 => ${swapTwoItems(3, 4)}`}</p>
      <h2>[Q6] getFibonacci</h2>
      <p>{`Fibonacci x 9 => ${getFibonacci(9)}`}</p>
      <h2>[Q7] getMaxProfit</h2>
      <p>{`${numbers} => ${getMaxProfit(numbers)}`}</p>
      <h2>[Q8] getFibonacci</h2>
      <p>{`Fibonacci x 9 => ${getFibonacci(9)}`}</p>
      <h2>[Q9] getFibonacci</h2>
      <p>{`Fibonacci x 9 => ${getFibonacci(9)}`}</p>
      <h2>[Q10] getFibonacci</h2>
      <p>{`Fibonacci x 9 => ${getFibonacci(9)}`}</p>
      <h2>[Q11] getPascalTriangleeNumbers</h2>
      <p>{`PascalTrianglee * 10  => `}</p>
      {
        getPascalTriangleeNumbers(10).map(d => {
          return <div>{d}</div>
        })
      }
    </div>
  )
}

export default InterviewQuestions