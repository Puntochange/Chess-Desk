const width = document.querySelector('.width');
const height = document.querySelector('.height');
const button = document.querySelector('.btn');

const wrapper = document.querySelector('.wrapper');


button.addEventListener('click', function () {

	let widthVal;
	let heightVal;


	if ((width.value == '') || (height.value ==  '') || (isNaN(width.value) || isNaN(height.value))) {
		confirm('Please Enter a Number.');
	}
	else if ((Number(width.value) > 42 || Number(height.value) > 42)) {
		confirm('Enter a Number less than 42.');
	}
	else {
		widthVal = width.value;
		heightVal = height.value;
	} 

	wrapper.innerHTML = '';


	for (let height = 0; height < heightVal; height++) {
      for (let width = 0; width < widthVal; width++) {
         if ((width + height) % 2 == 0) wrapper.innerHTML += `<div class="black"></div>`;
         else wrapper.innerHTML += `<div class="white"></div>`;
      }
      wrapper.innerHTML += `<br>`;
   }
})