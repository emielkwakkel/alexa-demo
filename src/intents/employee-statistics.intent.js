import { randomPhrase } from '../common/random-phrase';

export function employeeStatistics() {
  const employeesTotal = 2322;
  const employeesStartedYear = 159;
  const employeeStartedMonth = 64;

  const speechOutput = [
    `Sogeti has a total of ${employeesTotal}, ${employeesStartedYear} starting this year and ${employeeStartedMonth} this month!`,
    `There are a total of ${employeesTotal} Sogeti employees, ${employeesStartedYear} starting this year and ${employeeStartedMonth} this month!`,
  ];

  this.emit(':tell', randomPhrase(speechOutput));
}
