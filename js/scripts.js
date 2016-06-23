// Business Logic

var pingPong = function(number) {
  if (number % 3 === 0)
  return true;
};










// User Interface Logic
$(document).ready(function() {
  $("form#pingPong").submit(function(event) {
    event.preventDefault();
    var userNumber = $("input#userNumber").val();
    var numbers = [];

    for ( var i = 1; i <= userNumber; i += 1 ) {
      if (pingPong(i)) {
        numbers.push("ping");
      } else
        numbers.push(i);
    }

    $(".numbers").text(numbers);

  });
});
