
//function that passes parameters in and out//
function addNumbers(num1, num2) {  //addNumbers is the function invocation//
  return num1 + num2;
}

var result = addNumbers(5, 3);
console.log(result); // output is 8//

//An object with multiple properties//
var person = {
  firstName: "Sam",
  lastName: "Cruz",
  age: 21,
  gender: "female",
  email: "iamsam.cruz1@gmail.com"
};

// Accessing properties from object
console.log("First Name:", person.firstName);
console.log("Last Name:", person.lastName);
console.log("Age:", person.age);
console.log("Gender:", person.gender);
console.log("Email:", person.email);


//string method//
var str = "hello world";
var upperCaseStr = str.toUpperCase();
console.log(upperCaseStr); // Output is HELLO WORLD

//event method//
var button = document.getElementById("myButton");

// Adding a click event listener to the button
button.addEventListener("click", function() {         //click is the event//
    alert("Button clicked!");
});


