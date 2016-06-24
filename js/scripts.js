// Business Logic

var ping = function(number) {
  if (number % 3 === 0 && number !== 0)
  return true;
};

var pong = function(number) {
  if (number % 5 === 0 && number !== 0)
  return true;
};

var pingPong = function(number) {
  if (number % 15 === 0 && number !== 0)
  return true;
};


// User Interface Logic
$(document).ready(function() {
  $("form#pingPong").submit(function(event) {
    event.preventDefault();
    var userNumber = $("input#userNumber").val();
    var numbers = [];

    for ( var i = 0; i <= userNumber; i += 1 ) {
      if (pingPong(i)) {
        numbers.push("pingpong");
      } else if (ping(i)) {
        numbers.push("ping");
      } else if (pong(i)) {
        numbers.push("pong");
      } else
        numbers.push(i);
    }

    numbers.forEach(function() {
      $(".numbers").html("<li>" + numbers + "</li>");
    });

  });
});
