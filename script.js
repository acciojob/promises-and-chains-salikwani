//your JS code here. If required.
var nameElement = document.querySelector("#name");
var ageElement = document.querySelector("#age");
var buttonElement = document.querySelector("#btn");

buttonElement.addEventListener('click',sol);

function sol() {
	var nameVal = nameElement.value;
	var ageVal = ageElement.value;

	if(!(ageVal && nameVal)) {
		alert("Please enter valid details!");
		return;
	}

	var promise = new Promise(resolve, reject) {
		setTimeout(function() {
			if(ageVal < 18){
				reject(`Oh sorry ${nameVal}. You aren't old enough.`);
			} else {
				resolve(`Welcome ${nameVal}. You can vote.`);
			}
		},4000);
	}
	return promise;
}