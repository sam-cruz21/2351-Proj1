

//function//
const name= "Dev Ed"

function logger() {
  console.log("Party Time");
  console.log("Party Time");
  console.log("Party Time");
  console.log("Party Time");
  }

logger(); //function invocation//


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//example 1: function with parameter//
const name = "Dev Ed"

function adder(number1, number2)  {
console.log(numeber1 + number2);
}

adder(5,10);

//example 2//
const name = "Dev Ed";

function toUpper(text) {
  const upperCased = text.toUpperCase();
  console.log(upperCased);
}
toUpper(name);

//example 3//
const cake ="Tres Leches"

function toUpper(text) {
  const upperCased = text.toUpperCase();
  console.log(upperCased);
}
toUpper(cake);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//object with property//
const person = {
  firstName: "Samantha",
  lastName: "Cruz",
  id: 5566,
  fullName: function() {
    return this.FirstName + "" + this.lastName
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Event//

<button onclick="alert('Hello')">Click me.</button> ///"onclick" is the event

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Example 1:Method//
let x = 150;
x.toString();
(150).toString();
(100 + 50).toString();

//example 2//
let x = 9.656;
x.toExponential(2);
x.toExponential(4);
x.toExponential(6);

//example 3//
let x = 9.656;
x.toFixed(0);
x.toFixed(2);
x.toFixed(4);
x.toFixed(6);