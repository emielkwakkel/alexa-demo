import { delegateSlotCollection } from '../common/delegate-slot-collection';

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
