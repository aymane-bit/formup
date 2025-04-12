// for login form
const email = document.getElementById("email_log");
const password = document.getElementById("pass_hidden");
const form = document.getElementById("loginForm");
const error = document.getElementById("error_handel"); // used for both
// for register form
const register_form = document.getElementById("registerForm");
const name_re = document.getElementById("name_re");
const email_re = document.getElementById("email_re");
const pass_re = document.getElementById("pass_re");
const pass_confirm_re = document.getElementById("pass_confirm_re");

// handel the login form when submit it 
form.addEventListener('submit', (e) => {
    const mail = document.getElementsByClassName("input-box");
    let errorMessages = [];

    if (!email.validity.valid)
    {
        if (email.value === '')
            errorMessages.push('Email is required');
        else
            errorMessages.push('Invalid Email');
        document.querySelector("#loginForm h1").style.top = "-200px";
        error.style.visibility = "visible";
        error.style.top = "160px";
        error.style.left = "1227px";
    }
    if (email.validity.valid)
    {
        if (password.value === '' && password.value.length === 0)
        {
            errorMessages.push('Password is required');
            document.querySelector("#loginForm h1").style.top = "-200px";
            error.style.visibility = "visible";    
        }

    }
    e.preventDefault();
    error.innerText = errorMessages.join(', ');
})

// handle the register form when submit it

function name_check() {
    if (name_re.value === "")
        return false;
    return true;
}

function email_check() {
    // if (!email_re.validity.valid)
    //     return false;
    if (email_re.value === '')
        return false;
    return true;
}

function checkForEmptyField(){

    name_re.style.border = "2px solid #123458";
    email_re.style.border = "2px solid #123458";
    pass_re.style.border = "2px solid #123458";
    pass_confirm_re.style.border = "2px solid #123458";

    if (name_re.value === '')
    {
        name_re.style.border = "2px solid #9b0f0f";
        return true;
    }
    if (email_re.value === '')
    {
        email_re.style.border = "2px solid #9b0f0f";
        return true;
    }
    if (pass_re.value === '')
    {
        pass_re.style.border = "2px solid #9b0f0f";
        return true;
    }
    if (pass_confirm_re.value === '')
    {
        pass_confirm_re.style.border = "2px solid #9b0f0f";
        return true;
    }
    return false;
}

function show_error_dev() { 
    document.querySelector("#registerForm h1").style.top = "-190px";
    error.style.left = "150px";
    error.style.top = "90px";
    error.style.visibility = "visible";
}

// password policy check

register_form.addEventListener('submit', (e) => {
    let errorMessages = [];

    e.preventDefault();
    if (checkForEmptyField() === true)
        return ;
    if (!email_re.validity.valid)
    {
        errorMessages.push('Invalid Email');
        show_error_dev();
    }
    else if (pass_re.value !== pass_confirm_re.value)
    {
        errorMessages.push('Password Dont Match');
        show_error_dev();
        pass_confirm_re.style.border = "2px solid #9b0f0f";
        pass_re.style.border = "2px solid #9b0f0f";

    }
    error.innerText = errorMessages.join(', ');
})

