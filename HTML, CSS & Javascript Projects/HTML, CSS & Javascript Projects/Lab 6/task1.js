/* Lab 6 - Task 1 */
/* add your code here. Recommend you use the prototype library */
/* There is a local copy in your folder */

window.onload = function()
{
	var imgs = [''];
	var currentImg = document.getElementById('myImg');

	currentImg.src = 'face' + Math.floor(Math.random() * 4 + 1) + '.png';
	currentImg.onmouseover = function()
  {
		do
    {
			var selectedImageLink = 'face' + Math.floor(Math.random() * 4 + 1) + '.png';
		}
    while (currentImg.src.split('/').pop() === selectedImageLink)


		currentImg.src = selectedImageLink;
	}
}
