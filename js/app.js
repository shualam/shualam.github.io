// Dynamic greeting message
// get current date and time
let getDate = new Date();
let getHour = getDate.getHours();
let message;

// Check time and assign value to message
if (getHour >= 18){
    message = "Good evening!";
} else if (getHour >= 12) {
    message = "Good afternoon!";
} else if (getHour >= 0) {
    message = "Good morning!";
} else {
    message = "Hi!";
}

// grab the dom element and insert message
let displayMessage = document.querySelector("#greeting");
displayMessage.textContent = message;