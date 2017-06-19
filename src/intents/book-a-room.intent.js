export function bookARoom() {
    const filledSlots = delegateSlotCollection.call(this),
		intent = this.event.request.intent,
		location = intent.slots.Location.value,
		date = intent.slots.Date.value,
		time = intent.slots.Time.value,
		duration = intent.slots.Duration.value,
		numberOfParticipants = intent.slots.NumberOfParticipants.value;

	const speechOutput = `Booking a room at ${date}, ${time} at Sogeti ${location} for ${duration} hours and ${numberOfParticipants} participants.`;

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

function randomPhrase(array) {
	// the argument is an array [] of words or phrases
	let i = 0;
	i = Math.floor(Math.random() * array.length);
	return(array[i]);
}

function isSlotValid(request, slotName){
	let slot = request.intent.slots[slotName],
		slotValue;

	//if we have a slot, get the text and store it into speechOutput
	if (slot && slot.value) {
		//we have a value in the slot
		slotValue = slot.value.toLowerCase();
		return slotValue;
	} else {
		//we didn't get a value in the slot.
		return false;
	}
}
