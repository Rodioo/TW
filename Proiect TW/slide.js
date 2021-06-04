var slideIndex = 1;
showSlides(slideIndex);     
function plusSlides(n) 
{
  showSlides(slideIndex += n);
}
            
function showSlides(n) 
{
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) 
  {
    slideIndex = 1;
  }    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

var answer;
function findAnswer(choice)
{
  answer = choice;
}

function submitAnswer()
{
  if(answer === "Yes")
  {
    var obj = document.getElementById("agree");
    obj.remove();
    var para = document.createElement("p");
    var node = document.createTextNode("We are glad you liked it.");
    para.appendChild(node);
    var element = document.getElementById("descriere1");
    element.appendChild(para);
    para.classList.add("style1");
  }
  else if(answer === "No")
  {
    var obj = document.getElementById("agree");
    obj.remove();
    var para = document.createElement("p");
    var node = document.createTextNode("We are sorry you didn't like it.");
    para.appendChild(node);
    var element = document.getElementById("descriere1");
    element.appendChild(para);
    para.classList.add("style1");
  }
  else
  {
    alert("Please select an option before submitting.")
  }
}