import { delegateSlotCollection } from '../common/delegate-slot-collection';

export function countryCheck() {
    const filledSlots = delegateSlotCollection.call(this),
		intent = this.event.request.intent,
		country = intent.slots.Country.value,
		sogetiCountries = [
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
			'UK'
		],
		found = sogetiCountries.includes(country);

    let speechOutput = `At the moment we don't have an office in ${country}`;

    if (found) {
		speechOutput = `There is a Sogeti office in ${country}`;
	}


	this.emit(":tell",speechOutput);
}
