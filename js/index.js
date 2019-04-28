// using this file is optional
// you can also load the code snippets in using your browser's console

window.addEventListener('DOMContentLoaded', init, false);

function init(event) 
{
 
  var p = document.querySelectorAll("div")[1];
 
  p.addEventListener('click', clicker);
  p.addEventListener('mouseover', hover);
  p.addEventListener('mouseout', unhover);
  
  var input = document.querySelector('input');

  input.addEventListener('keydown', function(e) {
    console.log(e.key);
  });
}

function clicker(e)
{
  if (e.target.className.search("blue") === -1)
  {
    if (e.target.className.search("red") === -1)
      e.target.className = e.target.className + " blue";
    else
      e.target.className = e.target.className.replace("red","blue");
      
    e.target.className = e.target.className.trim();
  }
  else
  {
    e.target.className = e.target.className.replace("blue","red");
  }
}

function hover(e)
{
  
  console.log(colour);
  
}

function unhover(e)
{
  
}