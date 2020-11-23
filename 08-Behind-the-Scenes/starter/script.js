'use strict';

function calcAge(birthYear) {
  //top level global variable
  const age = 2037 - birthYear;
  function printAge() {
    const output = `You are  ${age} years old and born in ${birthYear} `;
    console.log(output);
  }
  printAge();
  console.log(firstName); //it will not find variable name in the function hence it will do a variable lookup in the scope chain
  return age;
}

const firstName = 'Sid';
calcAge(1998);

printAge(); //this will not work cuz its defined inside function only...
