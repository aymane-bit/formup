// this function is called to parse the data from the input

function parse_data()
{
    const texterea = document.getElementById("input");
    const text     = texterea.value;

    if (text.trim() === "")
    {
        alert("Empty Field");
        return false;
    }
    return true;
}

// this is the function that will be called when the next button is clicked
function nextlogic()
{
    if (parse_data() === false)
        return;
    

}

document.getElementById("nextbt").addEventListener("click", nextlogic);
