var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventlistener('textInput',email_verify);
password.addEventlistener('textInput',pass_verify);

function validated(){
    if (email.value.length < 9){
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if (password.value.length < 6){
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
}
function pass_verify(){
    if (password.value.length < 9){
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return false;
}
}
  
    









