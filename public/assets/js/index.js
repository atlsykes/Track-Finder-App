// code for the hamburger toggler functionality to work
$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });
    // search for tracks based on city
    $("#button-search").on("click", function () {
        let city = $("#input-city").val();
        console.log(city);
        window.location.replace(`/tracks/${city}/view`);
    });
    // go to the add-tracks page
    $("#add-track-home").on("click", function () {
        window.location.replace("/track/new");
    });
});
