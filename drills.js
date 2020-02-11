'use strict';
const numList = [-5, 28, 98, -20013, 0.7878, 22, 115];

function max (numbers){
  let i = 0;
  let currentMax = 0;
  while (i < numbers.length){
    i++;
    if (numbers[i] > currentMax) {
      currentMax = numbers[i];
    }
  }
  console.log(currentMax);
  return currentMax;
}
max(numList);

function min (numbers) {
  let i = 0;
  let currentMin = 0;
  while (i < numbers.length) {
    i++;
    if (numbers[i] < currentMin) {
      currentMin = numbers[i];
    }
  }
  console.log(currentMin);
  return currentMin;
}
min(numList);

function average(numbers) {
  let i = 0;
  let sum = 0; 
  numbers.forEach(function(element){
    sum = sum + element;
  });
  console.log(sum / numbers.length);
  return sum / numbers.length;
}
average(numList);

function fizzBuzz (countTo){
  let result = [];
  for(let i = 1; i < countTo; i++) {
    if (i % 15 === 0){
      result.push('fizzbuzz');
    }
    else if (i % 3 === 0){
      result.push('fizz');
    }
    else if (i % 5 === 0){
      result.push('buzz');
    }
    else {
      result.push(i);
    }
  }
  console.log(result);
  return result;
}
fizzBuzz(50);
