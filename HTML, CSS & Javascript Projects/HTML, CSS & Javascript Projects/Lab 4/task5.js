/* Task5.js - Add your Java Script Code Here */
allDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var dateObj = new Date();

function displayDate()
{
  day = allDays[dateObj.getDay()];
  date = dateObj.getDate();
  month = allMonths[dateObj.getMonth()];
  year = dateObj.getFullYear();

  dateText = document.getElementById("mydata");
  dateText.innerHTML = `Today is the ${date} (${day}) ${month} ${year}`;
}
