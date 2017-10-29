import { delegateSlotCollection } from '../common/delegate-slot-collection';

export function countryCheck() {
  const filledSlots = delegateSlotCollection.call(this); // eslint-disable-line no-unused-vars
  const intent = this.event.request.intent;
  const country = intent.slots.Country.value;
  const sogetiCountries = [
    'Belgium',
    'Denmark',
    'Finland',
    'France',
    'Germany',
    'Ireland',
    'Luxembourg',
    'Netherlands',
    'Holland',
    'The Netherlands',
    'Norway',
    'Spain',
    'Sweden',
    'Switzerland',
    'United Kingdom',
    'United States of America',
    'the USA',
    'USA',
    'the UK',
    'UK',
  ];
  const found = sogetiCountries.includes(country);

  let speechOutput = `At the moment we don't have an office in ${country}`;

  if (found) {
    speechOutput = `There is a Sogeti office in ${country}`;
  }


  this.emit(':tell', speechOutput);
}
