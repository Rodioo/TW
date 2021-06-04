function navPopUp() {
    var x = document.getElementById("myNav");
    var icon = document.getElementById("icon");
    if (x.className === "navLinks") 
    {
      x.className += " responsive";
      
    }
    else
    {
      x.className = "navLinks";
    }
    if(icon.className == "burger")
      {
        icon.className += " active";
        }
        else
        {
            icon.className = "burger";
        }
}

function clearCookies(event)
{
    localStorage.removeItem("hasCodeRunBefore");
    alert(event.target.id);
}
    
function validateForm()
{
    var x = document.forms["formular"]["inputText"].value;
    if (x === "")
    {
        return false;
    }
}

function searchWithButton()
{
    if(validateForm() === false)
    {
        alert("Please put some text to search for.");
    }
    else
    {
        var input = document.getElementById("searchBar");
        var txt = document.getElementById("searchBar").value;
        txt = "https://www.imdb.com/find?q=" + txt;
        window.open(txt, '_blank');
    }
    
}

function searchWithEnter(event)
{
    if(event.keyCode === 13)
    {   
        if(validateForm() !== false)
        {
            var input = document.getElementById("searchBar");
            var txt = document.getElementById("searchBar").value;
            txt = "https://www.imdb.com/find?q=" + txt;
            window.open(txt, '_blank');
            
        } 
    } 
}   


