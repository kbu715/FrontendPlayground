const form = document.getElementById('form');
const inputs = document.querySelectorAll('input');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

inputs.forEach(input => {
	input.addEventListener('keyup', (e) => {
		checkInput(e.currentTarget.id);
	})
})

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

function checkInput(id) {
	console.log(id);
	if(id === 'username') {
		const usernameValue = username.value.trim();
		if(usernameValue === '') {
			setErrorFor(username, 'Username cannot be blank');
		} else {
			setSuccessFor(username);
		}
	}

	if(id === 'email') {
		const emailValue = email.value.trim();
		if(emailValue === '') {
			setErrorFor(email, 'Email cannot be blank');
		} else if (!isEmail(emailValue)) {
			setErrorFor(email, 'Not a valid email');
		} else {
			setSuccessFor(email);
		}
	} 

	if(id === 'password' || id === 'password2') {
		const passwordValue = password.value.trim();
		const password2Value = password2.value.trim();

		if(passwordValue === '') {
			setErrorFor(password, 'Password cannot be blank');
		} else {
			setSuccessFor(password);
		}

		if(password2Value === '') {
			setErrorFor(password2, 'Password confirm cannot be blank');
		} else if(passwordValue !== password2Value) {
			setErrorFor(password2, 'Passwords does not match');
		} else{
			setSuccessFor(password2);
		}
	}
}

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

    const blankInputArray = [];
	
	if(usernameValue === '') {
        blankInputArray.push(username);
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
        blankInputArray.push(email);
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
        blankInputArray.push(password);
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
        blankInputArray.push(password2);
		setErrorFor(password2, 'Password confirm cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
    blankInputArray[0]?.focus();
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
}
