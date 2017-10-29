import { delegateSlotCollection } from '../common/delegate-slot-collection';

export function bookARoom() {
  const filledSlots = delegateSlotCollection.call(this); // eslint-disable-line no-unused-vars
  const intent = this.event.request.intent;
  const location = intent.slots.Location.value;
  const date = intent.slots.Date.value;
  const time = intent.slots.Time.value;
  const duration = intent.slots.Duration.value;
  const numberOfParticipants = intent.slots.NumberOfParticipants.value;

  const speechOutput = `Booking a room at ${date}, ${time} at Sogeti ${location} for ${duration} hours and ${numberOfParticipants} participants.`;

  this.emit(':tell', speechOutput);
}
