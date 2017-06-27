import { randomPhrase } from '../common/random-phrase';

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
