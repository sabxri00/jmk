document.getElementById("joinForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("message").innerHTML =
    "Welcome to JMK, " + name + "! Your membership request has been received.";

    this.reset();

});