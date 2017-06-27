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

function delegateSlotCollection(){
	if (this.event.request.dialogState === "STARTED") {
		console.log("Dialog started");

		const updatedIntent = this.event.request.intent;
		this.emit(":delegate", updatedIntent);
	} else if (this.event.request.dialogState !== "COMPLETED") {
		console.log("Dialog in progress");

		this.emit(":delegate");
	} else {
		console.log("Dialog completed");

		return this.event.request.intent;
	}
}
