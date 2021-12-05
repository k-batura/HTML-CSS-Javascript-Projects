/* Lab 6 - Task 3.  This is related to DOM (not Events), but you can
   still use the prototype library */

window.onload = function()
{
  var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var monthsOfTheYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var yearsOf = [];

  var option=null;
  for(var i=0; i < daysOfTheWeek.length; i++)
  {
    option = new Option(daysOfTheWeek[i]);
    $("days").appendChild(option);
  }

  for(var i=0; i < monthsOfTheYear.length; i++)
  {
    option = new Option(monthsOfTheYear[i]);
    $("months").appendChild(option);
  }

  for(var i=1970; i < 2019; i++)
  {
    yearsOf[i] = i;
    option = new Option(yearsOf[i]);
    $("years").appendChild(option);
  }
}
