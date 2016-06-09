$(document).ready(function() {
  $("form#romanize").submit(function(event) {
    event.preventDefault();
    var input = $("input#formInput").val();

    $("#result").text("this works");
  });
});
