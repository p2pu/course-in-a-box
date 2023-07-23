---
layout: index
published: true
---
<head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.20/dist/sweetalert2.min.css">
</head>
#### <b><font color="white">ℹ️ Introduction</font></b>

<font color="white">Welcome to our course dedicated to assisting men in achieving their goals of increasing their penis size. Our course focuses on sharing and discussing various penis enlargement practices, techniques, and products. With input from the knowledgeable BD and his colleagues, we aim to provide a safe and informative space where you can learn and embark on your growth journey with ease. Join us in the pursuit of a larger, more confident you!</font>

<br> 

#### <b><font color="white">🆘 Need some help</font></b>

<font color="white">Are you struggling to find the most suitable routine for your PE goals? Look no further! Here, we have curated a comprehensive selection of exercises to help you determine the most optimal regimen for maximizing your growth potential.</font>

<br> 

#### <b><font color="white">📈 Results of this course</font></b>

<font color="white">Upon completing this course, you will gain comprehensive knowledge on effective and safe methods to enhance both the length and girth of your penis. We equip you with the necessary information to achieve your desired growth goals using the most optimal approaches.</font>
<body onload="showJournalForm()">
<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/64bb81f194cf5d49dc65aa65/1h5u77654';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
  <style>
 
/* CSS to blur the background when the alert is open */
 .overlay {
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background-color: rgba(0, 0, 0, 0.5);
     backdrop-filter: blur(5px);
     z-index: 9999;
     display: none;
}
 .swal2-checkbox, .swal2-radio {
     align-items: center;
     justify-content: center;
     background: #101010;
     color: inherit;
}
 .swal2-popup {
     display: none;
     position: relative;
     box-sizing: border-box;
     grid-template-columns: minmax(0,100%);
     width: 32em;
     max-width: 100%;
     padding: 0 0 1.25em;
     border: none;
     border-radius: 30px;
     background: #101010;
     color: #545454;
     font-family: inherit;
     font-size: 1rem;
}
 .swal2-title {
     position: relative;
     max-width: 100%;
     margin: 0;
     padding: 0.8em 1em 0;
     color: #fcfcfc;
     font-size: 1.875em;
     font-weight: 600;
     text-align: center;
     text-transform: none;
     word-wrap: break-word;
}
 .swal2-checkbox, .swal2-radio {
     align-items: center;
     justify-content: center;
     background: #101010;
     color: white;
}
 .swal2-input-label {
     display: flex;
     justify-content: center;
     margin: 1em auto 0;
     color: white;
}
 .swal2-input {
     height: 2.625em;
     padding: 0 0.75em;
     color: white;
}

  </style>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.20/dist/sweetalert2.all.min.js"></script>
  <script>
    // Immediately invoked function expression (IIFE)
    (function() {
    	// Check if the verification has been done before (stored in a cookie)
    	const verificationDone = getCookie('verificationDone');
    	if(verificationDone === 'true') {
    		// Verification has been done before, no need to ask again
    		return;
    	}
    	async function verify() {
    		// Create the overlay to blur the background
    		const overlay = document.createElement('div');
    		overlay.classList.add('overlay');
    		document.head.appendChild(overlay);
    		const {
    			value: accept
    		} = await Swal.fire({
    			title: 'Terms and Conditions',
    			input: 'checkbox',
    			inputValue: 1,
    			inputPlaceholder: 'I agree with the terms and conditions',
    			confirmButtonText: 'Continue <i class="fa fa-arrow-right"></i>',
    			allowOutsideClick: false, // Prevent clicking outside the alert
    			inputValidator: (result) => {
    				return !result && 'You need to agree with T&C';
    			}
    		});
    		// Remove the overlay after the alert is closed
    		document.head.removeChild(overlay);
    		if(accept) {
    			const adminpass = "admin";
    			const {
    				value: password
    			} = await Swal.fire({
    				title: 'Enter Auth Token',
    				input: 'password',
    				inputLabel: 'Authentication',
    				inputPlaceholder: 'Enter your auth token',
    				inputAttributes: {
    					maxlength: 10,
    					autocapitalize: 'off',
    					autocorrect: 'off'
    				},
    				allowOutsideClick: false, // Prevent clicking outside the alert
    				inputValidator: (result) => {
    					return !result && 'Auth token is required';
    				}
    			});
    			if(password !== adminpass) {
    				Swal.fire({
    					title: 'Incorrect Auth Token',
    					icon: 'error',
    					showConfirmButton: false,
    					timer: 5000
    				}).then(() => {
    					window.location.replace("https://google.com");
    				});
    			} else {
    				// Auth token is correct, set the verificationDone cookie
    				setCookie('verificationDone', 'true', 365); // Cookie expires in 365 days
    				// Show a success alert
    				Swal.fire({
    					title: 'Success',
    					icon: 'success',
    					showConfirmButton: false,
    					timer: 2000 // Show the success alert for 2 seconds
    				}).then(() => {
    					// Optional: Redirect to another page after showing the success alert
    					// window.location.replace("https://example.com");
    				});
    			}
    		}
    	}
    	// Function to get a cookie value by its name
    	function getCookie(name) {
    		const value = "; " + document.cookie;
    		const parts = value.split("; " + name + "=");
    		if(parts.length === 2) return parts.pop().split(";").shift();
    	}
    	// Function to set a cookie
    	function setCookie(name, value, days) {
    		const date = new Date();
    		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    		const expires = "expires=" + date.toUTCString();
    		document.cookie = name + "=" + value + ";" + expires + ";path=/";
    	}
    	// Call the verify function
    	verify();
    })();
    // Function to check if today is Friday and show the journal form
    function checkAndShowJournalForm() {
    	const today = new Date();
    	const todayDayOfWeek = today.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday
    	// Show the form only on Friday (dayOfWeek = 5)
    	if(todayDayOfWeek === 5) {
    		showJournalForm();
    	}
    }

    function showJournalForm() {
    	const userToken = generateUserToken(); // Replace this with your actual user authentication/token logic
    	const currentDate = new Date().toISOString().split("T")[0];
    	Swal.fire({
    		title: "Weekly Journal",
    		allowOutsideClick: false,
    		html: `<p><strong>Starting Length:</strong></p>
          <input type="text" id="startingLength" class="swal2-input" placeholder="Enter starting length" required>
          <p><strong>Starting Girth:</strong></p>
          <input type="text" id="startingGirth" class="swal2-input" placeholder="Enter starting girth" required>
          <p><strong>End Goals:</strong></p>
          <input type="text" id="endGoals" class="swal2-input" placeholder="Enter end goals" required>`,
    		focusConfirm: false,
    		preConfirm: () => {
    			const startingLength = document.getElementById("startingLength").value;
    			const startingGirth = document.getElementById("startingGirth").value;
    			const endGoals = document.getElementById("endGoals").value;
    			// Custom validation to check if all input fields are filled out
    			if(!startingLength || !startingGirth || !endGoals) {
    				Swal.showValidationMessage("Please fill out all input fields.");
    				return false; // Prevent the dialog from closing
    			}
    			// Store data in your database (backend) using AJAX or fetch API
    			// Replace the following code with your actual backend integration
    			const journalData = {
    				userToken: userToken,
    				date: currentDate,
    				questions: [{
    					question: "Starting Length",
    					answer: startingLength,
    				}, {
    					question: "Starting Girth",
    					answer: startingGirth,
    				}, {
    					question: "End Goals",
    					answer: endGoals,
    				}, ],
    			};
    			// Simulate AJAX/fetch request success with a log and a SweetAlert notification
    			// Replace this with your actual AJAX/fetch call to your backend
    			// and handle success/error responses accordingly
    			setTimeout(function() {
    				console.log("User Token:", userToken);
    				console.log("Date:", currentDate);
    				console.log("Journal Data:", journalData);
    				Swal.fire({
    					icon: "success",
    					title: "Journal Submitted",
    					allowOutsideClick: false,
    					text: "Your journal entry has been submitted successfully!",
    				});
    			}, 1000); // Simulating a short delay for the AJAX/fetch request
    		},
    	});
    }

    function generateUserToken() {
    	// Replace this with your actual user authentication/token logic
    	// For this example, let's generate a random token of length 6
    	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    	let token = "";
    	for(let i = 0; i < 6; i++) {
    		token += characters.charAt(Math.floor(Math.random() * characters.length));
    	}
    	return token;
    }
  </script>
</body>
