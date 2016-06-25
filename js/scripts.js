// Business Logic

var numbers = [];

var ping = function(number) {
  if (number % 3 === 0 && number !== 0) {
    return true;
  }
};

var pong = function(number) {
  if (number % 5 === 0 && number !== 0) {
    return true;
  }
};

function pingPong(userNumber) {
  for ( var i = 1; i <= userNumber; i += 1 ) {
    if (ping(i) && pong(i)) {
      numbers.push("pingpong");
    } else if (ping(i)) {
      numbers.push("ping");
    } else if (pong(i)) {
      numbers.push("pong");
    } else
      numbers.push(i);
  }
}


// User Interface Logic
$(document).ready(function() {
  $("form#pingPong").submit(function(event) {
    event.preventDefault();
    var userNumber = $("input#userNumber").val();

    if (userNumber <= 0) {
      $("#warning").html("<p>Please Enter a Number Above 1. Thank you!</p>");
    } else {
      pingPong(userNumber);
    }

    numbers.forEach(function(number) {
      $(".numbers").append("<li>" + number + "</li>");
    });
  });
});
