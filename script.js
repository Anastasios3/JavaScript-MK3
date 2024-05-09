// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = 23;
if (x === 23) console.log(x);

const calcAge = birthYear => 2024 - birthYear;

console.log();

console.log(calcAge(1994));
console.log(x);
*/

const tempratures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//PROBLEM
// Understanding the Problem
// javascript get max value in array
// https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript
/*
// For regular arrays:
var max = Math.max(...arrayOfNumbers);

// For arrays with tens of thousands of items:
let max = testArray[0];
for (let i = 1; i < testArrayLength; ++i) {
  if (testArray[i] > max) {
    max = testArray[i];
  }
}
*/
/*
const calcTemoAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof max !== 'number') continue;
    if (temps[i] > max) max = temps[i];
  }
  for (let i = 0; i < temps.length; i++) {
    if (typeof min !== 'number') continue;
    if (temps[i] < min) min = temps[i];
  }
  console.log(max);
  console.log(min);
};

calcTemoAmplitude([3, 7, 4, 33, 46, 0, 7, 26]);
const amplitude = calcTemoAmplitude(tempratures);
console.log(amplitude);

const amplitude1 = calcTemoAmplitude([8, 9, 5], [1, 2, 3]);
console.log(amplitude1);
*/

// REFERANCE
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: prompt('Degrees Celsius'),
  };

  // Look at more console. (sth) variables!!
  console.log(measurement);
  console.table(measurement);
  console.log(measurement.value);
  console.warn(measurement.value);
  console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// 1. Identify the BUG
console.log(measureKelvin());

const data1 = [17, 21, 23];
const data2 = [12, 5 - 5, 0 - 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + ` ${arr[i]}C in ${i + 1} days ...`;
  }
  console.log('...' + str);
};
printForecast(data1);
