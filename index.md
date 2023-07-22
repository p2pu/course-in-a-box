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
<body>
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
    border-radius: 5px;
    background: #101010;
    color: #545454;
    font-family: inherit;
    font-size: 1rem;
}
  </style>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.20/dist/sweetalert2.all.min.js"></script>
  <script>
    async function verify() {
      // Check if the verification has been done before (stored in a cookie)
      const verificationDone = getCookie('verificationDone');
      if (verificationDone === 'true') {
        // Verification has been done before, no need to ask again
        return;
      }

      // Show the overlay to blur the background
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      document.body.appendChild(overlay);

      const { value: accept } = await Swal.fire({
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

      // Hide the overlay after the alert is closed
      document.body.removeChild(overlay);

      if (accept) {
        const adminpass = "admin";
        const { value: password } = await Swal.fire({
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

        if (password !== adminpass) {
          Swal.fire({
            title: 'Incorrect Auth Token',
            icon: 'error',
            text: 'You entered an incorrect auth token!',
            showConfirmButton: false,
            timer: 2000
          }).then(() => {
            window.location.replace("https://google.com");
          });
        } else {
          // Auth token is correct, set the verificationDone cookie
          setCookie('verificationDone', 'true', 365); // Cookie expires in 365 days
        }
      }
    }

    // Function to get a cookie value by its name
    function getCookie(name) {
      const value = "; " + document.cookie;
      const parts = value.split("; " + name + "=");
      if (parts.length === 2) return parts.pop().split(";").shift();
    }

    // Function to set a cookie
    function setCookie(name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }
  </script>
</body>
