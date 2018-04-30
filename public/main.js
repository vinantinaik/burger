$(document).ready(function () {

    $("#btnSubmit").on("click", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#addburger [name=burger]").val().trim()
        };
        $.ajax("/burgers", {
            type: "POST",
            data: newBurger
        })
        .then(function () {
            console.log("Added new burger");
            location.reload();
        })
       
        

    })

    $(".devburger").on("click", function(event) {
        var id = $(this).data("burgerid");
    
        // Update burger to be devoured
        $.ajax("/burgers/" + id, {
          type: "PUT"
        }).then(
          function() {
            console.log("Updated id ", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

})