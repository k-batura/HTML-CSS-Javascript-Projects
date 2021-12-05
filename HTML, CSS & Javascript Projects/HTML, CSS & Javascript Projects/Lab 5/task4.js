window.onload = function()
 {
  var addParaButton = document.getElementById('add');
  var deleteParaButton = document.getElementById('delete');
  var textArea = document.getElementById('input');
  var var1 = document.getElementById('output');

  addParaButton.onclick = function()
  {
    var p = document.createElement("p");
    p.innerHTML = textArea.value;
    var1.appendChild(p);
  }

  deleteParaButton.onclick = function()
  {
    var var2 = var1.getElementsByTagName("p");
    var var3 = var2.length-1;
    if (var2.length > 0)
    {
      var1.removeChild(var2[var3]);
    }
    else
    {
        alert ("No paragraph left to delete");
    }
  }


}
