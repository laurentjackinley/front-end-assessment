console.log("hello world");
const mouseoverimg = document.querySelector('#image')

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted successfully');
}
function giveCompli(evt){
	evt.preventDefault();
	alert("You're the best!")
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
mouseoverimg.addEventListener('mouseover',giveCompli)