//burger.js in public folder
// Make sure to wait to attach our handlers until the DOM is fully loaded.
$(function () {

    //This will capture the create new burger from burger-block.handlebars and POST the new burger as not devoured or FALSE
    $(".create-form").on("submit", function (event) {
        //used to make sure preventDefault on a submit event.
        event.preventDefault();

        //create a variable to hold the entered burger and set to FALSE
        var newBurger = {
            burger_name: $("#newBurger").val().trim(),
            devoured: "0"
        };
        console.log(newBurger);

        //POST the burger to api
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("New Burger has been created");
                //reload the page to get the updated list
                location.reload();
            }
        );
    });

    //This will change the devoured state from FALSE to TRUE
    $(".readyToEat").on("click", function (event) {
        var id = $(this).data("id");
        // var newEaten = $(this).data("neweaten") === false;
        var newEatenState = {
            devoured: true
        };
        console.log("Id: " + id);
        console.log("Devoured: " + newEatenState.devoured);

        //PUT the burger to new state in API
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function () {
                console.log("Changed the devoured state to", newEatenState);
                //reload the page to get the updated list
                location.reload();
            }
        );
    });


})