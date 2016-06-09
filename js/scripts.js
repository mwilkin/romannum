$(document).ready(function() {
  $("form#romanize").submit(function(event) {
    event.preventDefault();
    var input = $("input#formInput").val();

    // sorting input
    if (input != 0) {
      $("#result").text("no ZERO");
    }
    else if (input > 3999) {
      $("#result").text("error, too large to make Roman");
    }
    else if (input < 4000) {
      $("#result").text("this works");
    }

    // $("#result").text("this works");
  });
});




// // processing input
// for (i=0, i<=3, i++) {
//
// }
