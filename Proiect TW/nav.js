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
    
    


