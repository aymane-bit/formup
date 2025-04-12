let isMoved = false;
let animationId;

function moveIt() {
    const welcomeDiv = document.getElementById("welcome");
    const button = document.getElementById("signin");
    const form = document.getElementById("loginForm");
    const triangle = document.getElementById("trngl");
    
    if (animationId) // prevent animation overlap 
        cancelAnimationFrame(frame);
    
    
    let pos;
    let target;
    
    if (isMoved === false)
    {
        triangle.style.borderLeft = "0px";
        triangle.style.borderRight = "420px solid #9b0f0f";
        triangle.style.borderTop = "420px solid transparent"
        triangle.style.borderBottom = "420px solid transparent";
        triangle.style.left = "630px";
        pos = 0;
        target = 1050;
    }
    else
    {
        triangle.style.borderLeft = "420px solid #9b0f0f";
        triangle.style.borderTop = "420px solid transparent"
        triangle.style.borderBottom = "420px solid transparent";
        triangle.style.borderRight = "0px";
        triangle.style.left = "690px";
        pos = 1050;
        target = 0;
    }
    function frame()
    {
        if (pos === target) 
        {
            welcomeDiv.style.left = target + "px";
            if (isMoved === false)
            {
                button.textContent = "Sign In";
                isMoved = true;
            }
            else
            {
                button.textContent = "Sign Up";
                isMoved = false;
            }
            return;
        }
        if (isMoved === false)
            pos = pos + 50;
        else
            pos = pos - 50;
        welcomeDiv.style.left = pos + "px";
        animationId = requestAnimationFrame(frame);
    }

    animationId = requestAnimationFrame(frame);
}



document.getElementById("signin").addEventListener("click", moveIt);
document.querySelector("#showpass").addEventListener("click", function() {
    
    const pass = document.getElementById("pass_hidden");

    if (this.className === "bx bxs-sun")
    {
        this.className = "bx bx-sun";
        pass.type = "text";
    }
    else
    {
        this.className = "bx bxs-sun";
        pass.type = "password";
    }
        
});

