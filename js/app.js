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

// Count down timer
// Set the launch date
let launchDate = new Date("November 30, 2018 12:00:00").getTime();

// Count down every seconds
let time = setInterval(function(){
	
// 	get current date and time
	let currentTime = new Date().getTime();
	
// 	Calculate the launch date from today
	let launchDay = launchDate - currentTime;
	
// 	calculate time for days, hour, minues, and seconds
	let days = Math.floor(launchDay / (1000 * 60 * 60 * 24));
	let hours = Math.floor((launchDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((launchDay % (1000 * 60 * 60)) / (1000 * 60));
	let seconds =  Math.floor((launchDay % (1000 * 60)) / 1000);
	
// 	Display result in the website
	let displayTimer = document.getElementById("countDownTimer").textContent = days + "D " + hours + "H " + minutes + "M " + seconds + "S ";
	
// 	When the launch day is finish, display a message
	if (launchDay < 0) {
		clearInterval(time);
		document.getElementById("countDownTimer").textContent = "Launching soon!"
	}
}, 1000);
