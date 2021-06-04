var para;

function deleteSimilarShows()
{
    var width = window.innerWidth;
    if(width < 1920)
    {
        var obj = document.getElementById("parinteMarq");
        obj.remove();
        para = document.createElement("p");
        var shows = ["American Dad", "The Simpsons", "Family Guy", "South Park", "Ugly Americans", "The Boondocks", "Tuca & Bertie", "Rick & Morty", "Final Space"];
        var node = document.createTextNode(shows.join(" • "));  ///array method
        para.appendChild(node);
        var element = document.getElementById("similar");
        element.appendChild(para);
    }
}

function cookies()
{
    if (localStorage.getItem("hasCodeRunBefore") === null) {
        setTimeout(function(){alert("Press OK to accept our cookies.");}, 2000);
        localStorage.setItem("hasCodeRunBefore", true);
    }
    
}

function clearCookies(event)
{
    localStorage.removeItem("hasCodeRunBefore");
    alert(event.target.id);
}

function timer()
{
    var myVar = setInterval(timer, 1000);
    var d = new Date();
    document.getElementById("ceas").innerHTML = d.toLocaleTimeString();        ///date method
}

let culoareLocked = false;

function changeColorRandom()
{
    if(culoareLocked !== true)
    {
        var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);      ///math method
        var myDiv = document.getElementById("similar");
        myDiv.style.color = randomColor;
        var myDiv = document.getElementById("lock");
        myDiv.style.color = randomColor;
        myDiv = document.getElementsByTagName("SPAN");
        for(var i = 0; i < myDiv.length; i++)
        {
            myDiv[i].style.color = randomColor;
        }
        para.style.color = randomColor;
    } 
}

let cnt = 0;

function modifyCeas()
{
    if(cnt % 2 === 0)
    {
        document.getElementById("ceas").classList.remove("mystyle2");
        document.getElementById("ceas").classList.add("mystyle1");
        
    }
    else
    {
        document.getElementById("ceas").classList.remove("mystyle1");
        document.getElementById("ceas").classList.add("mystyle2");
    }
        
    cnt++;
}

function findColor(event){
    if(culoareLocked == true)
    {
        var elem = document.getElementById("similar");
        var text= window.getComputedStyle(elem, null).getPropertyValue("color");
        if(event.currentTarget.id === "similar")
            alert("The current color is ".concat(text, "."));       ///string method
    }
}

function lockColor(event)
{
    event.stopPropagation();
    var check = document.getElementById("lockColor");
    if(check.checked !== true)
        culoareLocked = false;
    else
        culoareLocked = true;
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

