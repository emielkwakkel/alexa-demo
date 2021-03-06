import { isSlotValid } from '../common/is-slot-valid';

export function mealsOverview() {
  const location = isSlotValid(this.event.request, 'Location');
  const date = isSlotValid(this.event.request, 'Date');
  const meals = [
    {
      date: '2017-06-29',
      location: 'Amsterdam',
      description: 'Meeting',
    },
    {
      date: '2017-06-30',
      location: 'Vianen',
      description: 'Meeting',
    },
    {
      date: '2017-07-03',
      location: 'Amsterdam',
      description: 'Meeting',
    },
  ];

  let speechOutput = 'You have no meals';

  const filteredMeals = filterMeals(meals, location, date);
  console.log('filteredMeals', filteredMeals); // eslint-disable-line no-console

  if (filteredMeals && filteredMeals.length > 0) {
    speechOutput = 'You have the following meals: ';

    filteredMeals.forEach((meal, index, array) => {
      speechOutput += `${meal.date} in ${meal.location}`;
      if (index !== array.length - 1) {
        speechOutput += ' and ';
      }
    });
  }

  this.emit(':tell', speechOutput);
}

function filterMeals(meals, location, date) {
  console.log( // eslint-disable-line no-console
    'meals: ', meals,
    'meals length: ', meals.length,
    'location: ', location,
    'date: ', date);

  if (meals && meals.length > 0) {
    if (location && date) {
      return meals.filter(meal => meal.date === date &&
     meal.location.toLowerCase() === location.toLowerCase());
    } else if (location) {
      return meals.filter(meal => meal.location.toLowerCase() === location.toLowerCase());
    } else if (date) {
      return meals.filter(meal => meal.date === date);
    }
    return meals;
  }
  return false;
}
