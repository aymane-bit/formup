
const email = document.getElementById("email_log");
const password = document.getElementById("pass_hidden").value;
const form = document.getElementById("loginForm");
const error = document.getElementById("error_handel");

form.addEventListener('submit', (e) => {
    let errorMessages = [];
    const mail = document.getElementsByClassName("input-box");

    if (!email.validity.valid)
    {
        if (email.value === '')
            errorMessages.push('Email is required');
        else
            errorMessages.push('Invalid Email');
        document.querySelector("#loginForm h1").style.top = "-200px";
        error.style.visibility = "visible";
    }
    if (email.validity.valid)
    {
        if (password === '')
        {
            errorMessages.push('Password is required');
            document.querySelector("#loginForm h1").style.top = "-200px";
            error.style.visibility = "visible";    
        }

    }
    e.preventDefault();
    error.innerText = errorMessages.join(', ');
})

