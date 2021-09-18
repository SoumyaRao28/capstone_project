 function validateform(){  
    var email=document.f1.email.value;  
    var password=document.f1.password.value;  
    if(email ==="admin@nwmissouri.edu"){
        alert(password);
        console.log('0');

    }else if(email ==="S538311@nwmissouri.edu" || email ==="s538311@nwmissouri.edu" ){
        alert('askldj');
        window.location.replace('/head.html');
        console.log('1');
        alert('askldj');

    }else{
        alert("Details Incorrect");
        console.log('2');

    }
    window.location.replace('https://www.campuslife.co.in');
}
/*
const loginButton = document.getElementById("signin");
var email=document.f1.email.value;  
    var password=document.f1.password.value;  

// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {
    // Prevent the default submission of the form
    e.preventDefault();
    // Get the values input by the user in the form fields
    const username = email;
    const password = password;

    if(email ==="admin@nwmissouri.edu"){
        alert(password);
        console.log('0');

    }else if(email ==="S538311@nwmissouri.edu" || email ==="s538311@nwmissouri.edu" ){
        alert('askldj');
        window.location.replace('google.com');
        console.log('1');
        alert('askldj');

    }else{
        alert("Details Incorrect");
        console.log('2');

    }
})
*/
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {
    // Prevent the default submission of the form
    e.preventDefault();
    // Get the values input by the user in the form fields
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        // If the credentials are valid, show an alert box and reload the page
        alert("You have successfully logged in.");
        window.location('google.com');
    } else {
        // Otherwise, make the login error message show (change its oppacity)
        loginErrorMsg.style.opacity = 1;
    }
});

function login()
	{
		var email = document.getElementById("email").value;
		var password = document.getElementById("password").value;
		if(email ==="admin@nwmissouri.edu"){
            window.location = "../index.html";
            
        }else if(email ==="S538311@nwmissouri.edu" || email ==="s538311@nwmissouri.edu" ){
            window.location = "../dashboard-coordinator.html";
    
        }else{
            alert("Details Incorrect");
    
        }
	}
	
	