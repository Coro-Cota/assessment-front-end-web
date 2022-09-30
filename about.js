console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form Submitted Successfully")
}

const ducky = document.querySelector('img')

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const compliment = evt => {
	
	alert("You're Amazing!")
}

ducky.addEventListener('mouseover', compliment)