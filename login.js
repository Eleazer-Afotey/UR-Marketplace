/*When user clicks on the email text field in sign-up.html, message appears below...*/

console.log("connected!"); //checking that script.js is connected to html page

var email = document.getElementById('email');
var signupMessage = document.getElementById('signupMessage');

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