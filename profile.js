let favPlace = document.querySelector('#place');

function handlePlace(evt) {
	evt.preventDefault();
	
	alert("My favorite place is Hawaii")
}

favPlace.addEventListener('click', handlePlace);

let favColor = document.querySelector('#color');

function handleColor(evt) {
	evt.preventDefault();
	
	alert("My favorite color is Blue")
}

favColor.addEventListener('click', handleColor);

let favritual = document.querySelector('#ritual');

function handleritual(evt) {
	evt.preventDefault();
	
	alert("My favorite ritual is playing video games")
}

favritual.addEventListener('click', handleritual);