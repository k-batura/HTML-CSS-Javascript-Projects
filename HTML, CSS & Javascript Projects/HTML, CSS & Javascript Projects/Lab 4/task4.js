
function rollDice()
{

  firstR = Math.floor(Math.random() * 6) + 1;
  secondR = Math.floor(Math.random() * 6) + 1;

  displayR = document.getElementById("mydata");
  displayR.innerHTML = `Dice rolls are "${firstR}" "${secondR}"`;

  if (firstR == secondR)
  {
    alert("DOUBLES");
  }

}
