var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
const email = document.getElementById("mail");
const password = document.getElementById("pass");
const form = document.getElementById("form");


form.addEventListener('submit', function(validate){
        if (fname.value === '') {
            alert("first name cannot be empty");
            event.preventDefault();
        }
        else if (email.value = '') {
            alert("email cannot be empty");
            event.preventDefault();
        }
        else if (password.value = '') {
            alert("password cannot be empty");
            event.preventDefault();
        }
        else if (password.length.value <= 6 || password.length.value >= 15) {
            alert("length of the password should be greater then 6 letters  and less than 15 letters")
            event.preventDefault();
        }

        else {
            alert("successfull")
        }
    })



 


