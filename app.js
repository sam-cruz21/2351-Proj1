let person = {                              //person is the object//
  name: "Sam",
  age: 21,
 
  greet: function() {                       //object method//
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  }
};

console.log(person.name); //Sam//
console.log(person.age); //21//

person.greet();


//array//
let numbers = [2, 4, 6, 8, 10];

//array methods//
let doubledNumbers = numbers.map(function(num) {
  return num * 2;
});

console.log(doubledNumbers); // [4, 8, 12, 16, 20]
