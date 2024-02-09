//Example 1 concatenation string variable//
console.log("Hello my name is" + " Sam");  //concatenation string variable//

//example 2//
const name = "Samantha";
const age = 21;

console.log("Hello it's me " + name + " and my age is " + age + " and I am getting old" );

//another way to write the string above//
console.log("Hello it's me ${name} and my age is ${age}");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//"if" conditional statement//

const age = 21;

if(age > 18) {
  console.log ("You are good to go!");
} else {
  console.log("You aren't old enough");
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//string method//
let text = "abcdefgh";
let length = text.length;// the outcome counts the length of the characters, the output would be 8

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//switch statement//
switch(fruits) {
  
  case
   "Banana":
      alert("Hello")
      break;
    
  case
   "Apple":
      alert("Leave")
      break;    
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Number Method//

Number(true);
Number(false);
Number("10");
Number("  10");
Number("10  ");
Number(" 10  ");
Number("10.33");
Number("10,33");
Number("10 33");
Number("John");//number method converts variables to numbers//