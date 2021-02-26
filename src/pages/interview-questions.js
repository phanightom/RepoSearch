import React from 'react';

const InterviewQuestions = () => {
  const isPalindromeString = (str) => {
    const palindromeString = str.split('').reverse().join('');
    return str === palindromeString;
  }

  const uniqueNumberItems = (arr) => {
    let hashObj = {};
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
    let maxCharNumber = 1;
    for (let i = 0; i < str.length; i++) {
      if (!charObj[str.charAt(i)]) {
        charObj[str.charAt(i)] = 1;
      }
    }
    console.log(charObj)
    return charObj;

  }

  const numbers = [1,13,24,11,11,14,1,2];
  const strings = 'afjghdfrddddddsdenas';
  return (
    <div style={{ padding: '20px 40px'}}>
      <h2>[Q1] isPalindromeString</h2>
      <p>{`mamam is palindrome => ${isPalindromeString('mamam')}`}</p>
      <p>{`Hello is palindrome => ${isPalindromeString('Hello')}`}</p>
      <h2>[Q2] uniqueStringItems</h2>
      <p>{`[1,13,24,11,11,14,1,2] => ${uniqueNumberItems(numbers)}`}</p>
      <h2>'[Q3]' findMaxDuplicatieChar</h2>
      <p>{`afjghdfrddddddsdenas => ${findMaxDuplicatieChar(strings)}`}</p>
    </div>
  )
}

export default InterviewQuestions