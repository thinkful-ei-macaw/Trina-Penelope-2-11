'use strict';
const numList = [-5, 28, 98, -20013, 0.7878, 22, 115];

function max (numbers){
  let i = numbers[0];
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
  let i = numbers[0];
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