import { randomPhrase } from '../common/random-phrase';

export function holidayRemaining() {
	const daysRemaining = 20;

	let speechOutput = [
		`You have ${daysRemaining} days remaining for holiday!`,
		`${daysRemaining} days for holiday!`
	];

	this.emit(":tell", randomPhrase(speechOutput));
}
