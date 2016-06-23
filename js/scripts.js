// Business Logic






// User Interface Logic
$(document).ready(function() {
  $("form#pingPong").submit(function(event) {
    event.preventDefault();
    var userNumber = $("input#userNumber").val();

    alert(userNumber);
  });
});
