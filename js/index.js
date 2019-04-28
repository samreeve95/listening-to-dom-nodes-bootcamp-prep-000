// using this file is optional
// you can also load the code snippets in using your browser's console

window.addEventListener('DOMContentLoaded', init, false);

function init(event) 
{
 
  var p = document.querySelectorAll("div")[1];
 
  p.addEventListener('click', clicker);
  p.addEventListener('mouseover', hover);
  p.addEventListener('mouseout', unhover);
}

function clicker(e)
{
  if (e.target.className.search("blue") === -1)
  {
    if (e.target.className.search("red") === -1)
      e.target.className = e.target.className + " blue";
    
    e.target.className.trim();
  }
  else
  {
    e.target.className = e.target.className.replace("blue","red");
  }
}

function hover(e)
{
  var str = e.target.className;
  if (str.search("hover") === -1)
    e.target.className = e.target.className + " hover";
    e.target.className.trim();
}

function unhover(e)
{
  console.log("unhover");
  e.target.className = e.target.className.replace(" hover","");
}