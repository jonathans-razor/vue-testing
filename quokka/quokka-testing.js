const person = {
  name: 'John',
  age: 30,
  location: 'New York'
};

console.log(person.name); // John
person
console

function add(a, b) {
  return a + b;
}

add(2, 3); // 5

const nums = [11, 30, 22, 9, 14] /*? $.slice(0, 2)*/; //? [11, 30]

console.log(nums.pop()); // 14

const sum = nums.reduce((acc, num) => acc + num, 0); // ? 86

sum 

const over = nums.filter(num => num > 20);

over  // [30, 22]

import {  } from "module";

const moment = require('moment'); 

const todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a');

const fetch = require('node-fetch');

const getUser = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return user.json();
}