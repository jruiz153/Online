$(document).ready(function() {
    //$("#wrapper").toggleClass("menuDisplayed");

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("menuDisplayed");
    });
});