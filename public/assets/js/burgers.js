console.log("we're talkin")
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-ready").on("click", function(event) {
    event.preventDefault();
    console.log(event);
    var id = $(this).data("id");
    var newReady = $(this).data("newdevoured");

    var newReadyState = {
      devoured: newReady
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newReadyState
    }).then(
      function() {
        console.log("changed ready to", newReady);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log($("#ca").val());
    var newBurger = {
      burger_name: $("#ca").val().trim(),
      ready: $("[name=Devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function(res) {
        console.log(res);
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});