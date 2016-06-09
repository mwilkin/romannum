// Backend
// var workingNumber = input;
var resultString = "";

var romanize = function(workingNumber) {
  if (workingNumber > 1000) {
    workingNumber =- 1000;
    resultString = (resultString + "M");
    console.log("M level");
  }
  else if (workingNumber > 900) {
    workingNumber =- 900;
    resultString = (resultString + "CM");
  }
  else if (workingNumber > 500) {
    workingNumber =- 500;
    resultString = (resultString + "D");
  }
  else if (workingNumber > 400) {
    workingNumber =- 400;
    resultString = (resultString + "CD");
  }
  else if (workingNumber > 100) {
    workingNumber =- 100;
    resultString = (resultString + "C");
    console.log("C level");
  }
  else if (workingNumber > 90) {
    workingNumber =- 90;
    resultString = (resultString + "XC");
  }
  else if (workingNumber > 50) {
    workingNumber =- 50;
    resultString = (resultString + "L");
  }
  else if (workingNumber > 40) {
    workingNumber =- 40;
    resultString = (resultString + "XL");
  }
  else if (workingNumber > 10) {
    workingNumber =- 10;
    resultString = (resultString + "X");
  }
  else if (workingNumber > 9) {
    workingNumber =- 9;
    resultString = (resultString + "IX");
  }
  else if (workingNumber > 5) {
    workingNumber =-5;
    resultString = (resultString + "V");
  }
  else if (workingNumber > 4) {
    workingNumber =- 4;
    resultString = (resultString + "IV");
  }
  else (workingNumber > 1)
    workingNumber =- 1;
    resultString = (resultString + "I");
  };


// var arabicsArray = [1,5,10,50,100,500,1000];
// var romansArray = [I,V,X,L,C,D,M];
// var convertRoman = function(input)

  // var transelse ifmNumber = function(input) {
  //
  // }

// var m = (inputNum  - (inputNum%))/

// Front end

$(document).ready(function() {
  $("#romanize").submit(function(event) {
    event.preventDefault();
    var workingNumber = parseInt($("#formInput").val());

    if (workingNumber > 3999 || workingNumber < 1) {
      alert("Please enter a number that can convert to Roman numerals.");
    } else {
      return romanize(workingNumber);
    }
  });
});
