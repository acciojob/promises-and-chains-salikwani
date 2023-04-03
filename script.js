//your JS code here. If required.
var nameElement = document.querySelector("#name");
var ageElement = document.querySelector("#age");
var buttonElement = document.querySelector("#btn");

var promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		var nameVal = nameElement.value;
		var ageVal = ageElement.value;
		
		if(!(ageVal && nameVal)) {
			alert("Please enter valid details!");
			return;
		}
		if(ageVal < 18){
			reject(`Oh sorry ${nameVal}. You aren't old enough.`);
		} else {
			resolve(`Welcome ${nameVal}. You can vote.`);
		}
	},4000);
});

function callPromise() {
	return promise;
}

function sol(e) {
	e.preventDefault();
	callPromise().then(alert).catch(alert);
}

buttonElement.addEventListener('click',sol);