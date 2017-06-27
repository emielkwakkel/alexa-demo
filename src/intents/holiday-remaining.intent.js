export function holidayRemaining() {
	const daysRemaining = 20;

	let speechOutput = [
		`You have ${daysRemaining} days remaining for holiday!`,
		`${daysRemaining} days for holiday!`
	];

	this.emit(":tell", randomPhrase(speechOutput));
}

function randomPhrase(array) {
	// the argument is an array [] of words or phrases
	let i = 0;
	i = Math.floor(Math.random() * array.length);
	return(array[i]);
}