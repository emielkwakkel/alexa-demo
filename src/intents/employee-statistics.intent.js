export function employeeStatistics() {
	const employeesTotal = 2322,
		employeesStartedYear = 159,
		employeeStartedMonth = 64;

	let speechOutput = [
		`Sogeti has a total of ${employeesTotal}, ${employeesStartedYear} starting this year and ${employeeStartedMonth} this month!`,
		`There are a total of ${employeesTotal} Sogeti employees, ${employeesStartedYear} starting this year and ${employeeStartedMonth} this month!`,
	];

	this.emit(":tell", randomPhrase(speechOutput));
}

function randomPhrase(array) {
	// the argument is an array [] of words or phrases
	let i = 0;
	i = Math.floor(Math.random() * array.length);
	return(array[i]);
}