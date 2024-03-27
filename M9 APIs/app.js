//Browser APIs//
const x = document.getElementById("demo");

function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(showPosition);
  } catch {
    x.innerHTML = err;
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}


function myFunction() {
    const inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
      document.getElementById("demo").innerHTML = inpObj.validationMessage;
    } else {
      document.getElementById("demo").innerHTML = "Input OK";
    } 
  } 

  function myFunction() {
    let text;
    if (document.getElementById("id1").validity.rangeOverflow) {
      text = "Value too large";
    } else {
      text = "Input OK";
    } 
    document.getElementById("demo").innerHTML = text;
  }

  function myFunction() {
    let text;
    if (document.getElementById("id1").validity.rangeUnderflow) {
      text = "Value too small";
    } else {
      text = "Input OK";
    } 
    document.getElementById("demo").innerHTML = text;
  }

  localStorage.setItem("name","Sammy C");
  document.getElementById("demo").innerHTML = localStorage.getItem("name");

  
