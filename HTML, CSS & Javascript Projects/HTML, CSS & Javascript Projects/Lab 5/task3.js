
window.onload = function()
 {
  var highlighted = false;
  var button = document.getElementById("button");
  button.onclick = function()
  {
    var entireText = document.getElementsByTagName("p");
    if (highlighted)
    {
      changeBackground(entireText, "transparent");
      button.innerHTML = "Click to HIGHLIGHT";
    }
    else
    {
      changeBackground(entireText, "yellow");
      button.innerHTML = "Click to UNHIGHLIGHT";
    }
    highlighted = !highlighted;
  }
}

function changeBackground(entireText, color)
{
  for (var i = 0; i < entireText.length; i++)
  {
    entireText[i].style.backgroundColor = color;
  }
}
