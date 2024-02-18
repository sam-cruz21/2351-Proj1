//concatenated variable//
var firstName = "Sam";
var lastName = "C";

var fullName = firstName + " " + lastName;
console.log(fullName); // Output is Sam C

//if conditional statement//
var temperature = 65;

if (temperature > 50) {
    console.log("It's a little warm outside");
} else if (temperature >= 45 && temperature <= 55) {
    console.log("It's a nice day.");
} else {
    console.log("It's cold outside.");
}
//switch statement//
var dayOfWeek = "Monday";
var schedule;

switch (dayOfWeek) {
    case "Monday":
        schedule = "Get groceries for the week at 9AM";
        break;
    case "Tuesday":
        schedule = "Schedule a doctor's appointment after 12PM ";
        break;
    case "Wednesday":
        schedule = "Go to the gym at 10PM";
        break;
    case "Thursday":
        schedule = "Pay light bill after work at 7PM";
        break;
    case "Friday":
        schedule = "Last minute cleaning in the evening";
        break;
    default:
        schedule = "Nothing planned for today";
}

console.log("Today's schedule:", schedule);

//String method//
String.prototype.toUppercase = function() {
  return this.toUpperCase();
};

//output
var str = "Taylor Swift's music is basic";
console.log(str.toUppercase()); // Output: "TAYLOR SWIFT'S MUSIC IS BASIC"

//Number Method//
Number.prototype.customToString = function() {
  return this.toString();
};

var num = 210;
console.log(num.customToString()); // Output is "210"

