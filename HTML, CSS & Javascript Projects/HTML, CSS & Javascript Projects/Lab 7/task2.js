/* Lab 6 - Task 2  */
 window.onload = function()
 {

 $("userid").observe("keyup", theUserId);
 $("code").observe("keyup", codeArray);
 $("number").observe("keyup", num);
 $("submitButton").observe("click", submit);
 $("clear").observe("click", clear);
}
function theUserId()
{
  var reg = new RegExp(/^[A-Z][A-Z0-9]+$/i);
  if (reg.test($(this).value) == true)
    {
       $(this).nextElementSibling.innerHTML = "CORRECT";
    }
  else
    {
      $(this).nextElementSibling.innerHTML = "INCORRECT";
    }
}


function codeArray()
{
  var codes = ["EECS","ESSE","MATH","HIST","CHEM","BIO"];
  var code = $("code").value;
  code = code.toUpperCase();
  if (codes.includes(code))
    {
      $(this).nextElementSibling.innerHTML = "CORRECT";
    }
  else
    {
      $(this).nextElementSibling.innerHTML = "INCORRECT";
    }
}


function num()
{
  var reg = new RegExp(/^[0-9][0-9][0-9][0-9]$/i);
  if (reg.test($(this).value) == true)
    {
       $(this).nextElementSibling.innerHTML = "CORRECT";
    }
    else
    {
      $(this).nextElementSibling.innerHTML = "INCORRECT";
    }
}

function submit()
{
  var spans = document.getElementsByClassName("message");
  var valid = true;

  for(var i=0; i < spans.length; i++)
  {
    if (spans[i].innerHTML != "CORRECT")
      {
        valid = false;
      }
  }

  if(valid)
    {
      $("myForm").submit();
    }
  else
    {
      alert("form incorrect");
    }
}

function clear()
{
  window.location.reload();
}
