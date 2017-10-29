import { randomPhrase } from '../common/random-phrase';

export function holidayRemaining() {
  const daysRemaining = 20;

  const speechOutput = [
    `You have ${daysRemaining} days remaining for holiday!`,
    `${daysRemaining} days for holiday!`,
  ];

  this.emit(':tell', randomPhrase(speechOutput));
}
