
function myFunction()
{
  var p = document.getElementById("mydata");
  var ranNum = Math.random();

  if (ranNum > 0.5)
  {
    p.innerHTML = "YES";
  }

  else
  {
    p.innerHTML = "NO";
  }
}
