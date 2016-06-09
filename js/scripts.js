// Backend
// var arabicsArray = [1,5,10,50,100,500,1000];
// var romansArray = [I,V,X,L,C,D,M];
  // var input = "12";
  //  var convertRoman = function(input)

  // var transformNumber = function(input) {
  //
  // }

// var m = (inputNum  - (inputNum%))/

// Front end

$(document).ready(function() {
  $("form#romanize").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#formInput").val());

    if (input > 3999 || input < 1) {
      alert("Please enter a number that can convert to Roman numerals.");
    } else {
      alert("Success!");
    }
  });
});
