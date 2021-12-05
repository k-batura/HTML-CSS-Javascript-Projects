/* Task6.js - Add your Java Script Code Here */

var currentNumber = 21;

function decrementNumber()
 {
    displayNumber = document.getElementById("mydata");

    currentNumber--;

    if (currentNumber > 0)
    {
      displayNumber.innerHTML = currentNumber;
    }
     else
    {
      displayNumber.innerHTML = "BOOM!";
    }
}
