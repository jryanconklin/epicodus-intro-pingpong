// Business Logic












// User Interface Logic
$(document).ready(function() {
  $("form#pingPong").submit(function(event) {
    event.preventDefault();
    var userNumber = $("input#userNumber").val();
    var numbers = [];

    for ( var i = 0; i <= userNumber; i += 1 ) {
      numbers.push(i);
    }

    $(".numbers").text(numbers);

  });
});
