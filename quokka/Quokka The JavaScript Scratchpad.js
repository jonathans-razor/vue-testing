//import fetch from 'node-fetch';
import { fetch } from 'node-fetch';

const fetch = require('node-fetch');

const getUser = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.json();
  console.log(data); // { id: 1, name: 'Leanne Graham', ... }
}

getUser(1) // { id: 1, name: 'Leanne Graham', ... }
getUser(2) // { id: 1, name: 'Leanne Graham', ... }
getUser(2) /*?. */ 
