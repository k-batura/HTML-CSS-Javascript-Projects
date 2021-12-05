
window.onload = function()
{
  var color_1g = document.getElementsByTagName("button");
  var color_1b = document.getElementsByTagName("button");
  var font_mono = document.getElementsByTagName("button");
  var font_sans= document.getElementsByTagName("button");
  var font_serif = document.getElementsByTagName("button");
  var textsizeup = document.getElementsByTagName("button");
  var textsizedown = document.getElementsByTagName("button");

  color_1g[0].onclick = greenText;
  color_1b[1].onclick= blueText;
  font_mono[2].onclick = monoFont;
  font_sans[3].onclick = sansFont;
  font_serif[4].onclick = serifFont;
  textsizeup[5].onclick= plusSize;
  textsizedown[6].onclick = minusSize;
}

function greenText()
{
  var p = document.getElementById("paragraph").style;
  p.color = "green";
}

function blueText()
{
  var p = document.getElementById("paragraph").style;
  p.color = "blue";
}

function monoFont()
{
  var p = document.getElementById("paragraph").style;
  p.fontFamily = "monospace";
}

function sansFont()
{
  var p = document.getElementById("paragraph").style;
  p.fontFamily = "sans-serif";
}

function serifFont()
{
  var p = document.getElementById("paragraph").style;
  p.fontFamily = "serif";
}

function plusSize()
{
  var style = window.getComputedStyle(paragraph,null).getPropertyValue("font-size")
  var currentSize = parseFloat(style);
  paragraph.style.fontSize = (currentSize + 1) + "px";
}

function minusSize()
{
  var style = window.getComputedStyle(paragraph,null).getPropertyValue("font-size")
  var currentSize = parseFloat(style);
  paragraph.style.fontSize = (currentSize - 1) + "px";
}
