console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();

	alert('form submit');
}

function handleMouseover(evt) {
	evt.preventDefault();
	
	alert('I am Awesome and So are You!');

}

let form = document.querySelector('#contact');
let image = document.querySelector('#leopics');

form.addEventListener('submit', handleSubmit);

image.addEventListener('mouseover', handleMouseover);