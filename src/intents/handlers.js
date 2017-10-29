import { bookARoom } from './book-a-room.intent';
import { countryCheck } from './country-check.intent';
import { employeeStatistics } from './employee-statistics.intent';
import { holidayRemaining } from './holiday-remaining.intent';
import { mealsOverview } from './meals-overview.intent';
import { launchRequest } from './launch-request.intent';
import { unhandled } from './unhandled.intent';

export const handlers = {
    'BookARoom': bookARoom,
    'CountryCheck': countryCheck,
    'ConferenceOpen': conferenceOpen,
    'HolidayRemaining': holidayRemaining,
    'EmployeeStatistics': employeeStatistics,
    'MealsOverview': mealsOverview,
    'Unhandled': unhandled,
    'LaunchRequest': launchRequest
};
