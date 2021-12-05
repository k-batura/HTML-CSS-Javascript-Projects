/* Lab 6, Task 2.  Use the prototype library */

window.onload = function()
{
  $("input1").observe("keypress", keyPress);
  $("input2").observe("keypress", keyPress);
  $("input3").observe("keypress", keyPress);
  $("submitButton").onclick = submitCheck;
};

function keyPress()
{
  var input = this.value;
  if (input.includes("Enter")) {
    this.value = "";
  }
}

function submitCheck()
{
  if ($("input1").value == "" || $("input1").value == "Enter Name")
  {
    var errorText = document.createElement("p");
    var node = document.createTextNode("Error in one of your fields!");
    errorText.appendChild(node);
    var element = document.getElementById("ErrorMessage");
    element.appendChild(errorText);
  }
  else if ($("input2").value == "" || $("input2").value == "Enter Student ID")
  {
    var errorText = document.createElement("p");
    var node = document.createTextNode("Error in one of your fields!");
    errorText.appendChild(node);
    var element = document.getElementById("ErrorMessage");
    element.appendChild(errorText);
  }
  else if ($("input3").value == "" || $("input3").value == "Enter Email")
  {
    var errorText = document.createElement("p");
    var node = document.createTextNode("Error in one of your fields!");
    errorText.appendChild(node);
    var element = document.getElementById("ErrorMessage");
    element.appendChild(errorText);
  }
  else
  {
    $("myForm").submit();
  }
}
