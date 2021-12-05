/* Task3.js - Add your Java Script Code Here */

function addSum(num)
{
  displaySum = document.getElementById("mydata");
  var sum = 0;

  for (i = 0; i <= num; i++)
  {
    sum += i;
  }

  displaySum.innerHTML = "Result = " + sum;

}
