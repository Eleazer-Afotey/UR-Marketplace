/*When user clicks on the email text field in sign-up.html, message appears below...*/

console.log("connected!"); //checking that script.js is connected to html page

var email = document.getElementById('email');
var password = document.getElementById('password');
var signupMessage = document.getElementById('signupMessage');
var signupButton = document.getElementById('signupButton');

function displayHint(hint){
	signupMessage.textContent = hint; //textContent represents the text content of the node (div)
	//we want to assign a hint to feedback's textContent
}

email.onfocus = function(){
    displayHint("Enter a valid student email address");
};

email.onblur = function(){
    displayHint("");
};

password.onfocus = function(){
    displayHint("Password should be at least 8 characters");
};

password.onblur = function(){
    displayHint("");
};

function passwordFeedback(feedback){
	if(password.value.length < 8 && password.value.length >= 1){
		signupMessage.textContent = feedback;
	}

	else {
		signupMessage.textContent = "";
	}
}

password.onblur = function(){  //on blur for when it loses focus
	passwordFeedback("Your password is less than 8 characters");
};