const guest = 'Guest';
const guestMsg = 'Please register with us.';
const regdMsg = 'Nice meeting you again!!';

function welcome(name = `${guest}`) {
	if (name != `${guest}`) {
		alert(`Welcome, ${name}! ${regdMsg}`);
	} else {
		alert(`Welcome, ${name}! ${guestMsg}`);
	}	
}

welcome('Chandrasekar');
welcome();