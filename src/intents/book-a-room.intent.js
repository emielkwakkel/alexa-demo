import {moment} from 'moment/moment';

export function bookARoom() {
    const intent = this.event.request.intent;

    console.log(intent);

    if (!intent.slots.Location.value) {
        console.log('location');
        const slotToElicit = 'Location';
        const speechOutput = 'In which Sogeti office is the meeting?';
        const repromptSpeech = speechOutput;
        const cardContent = 'In which Sogeti office is the meeting?';
        const cardTitle = 'Location';
        const updatedIntent = intent;
        this.emit(':elicitSlotWithCard', slotToElicit, speechOutput, repromptSpeech, cardTitle, cardContent, updatedIntent);
    } else if (!intent.slots.Date.value) {
        console.log('date');
        const slotToElicit = 'Date';
        const speechOutput = 'What is the date of the meeting?';
        const repromptSpeech = speechOutput;
        const cardContent = 'What is the date of the meeting?';
        const cardTitle = 'Date';
        const updatedIntent = intent;
        this.emit(':elicitSlotWithCard', slotToElicit, speechOutput, repromptSpeech, cardTitle, cardContent, updatedIntent);
    } else if (!intent.slots.Time.value) {
        console.log('time');
        const slotToElicit = 'Time';
        const speechOutput = 'What is the time of the meeting?';
        const repromptSpeech = speechOutput;
        const cardContent = 'What is the time of the meeting?';
        const cardTitle = 'Time';
        const updatedIntent = intent;
        this.emit(':elicitSlotWithCard', slotToElicit, speechOutput, repromptSpeech, cardTitle, cardContent, updatedIntent);
    } else if (!intent.slots.Duration.value) {
        console.log('duration');
        const slotToElicit = 'Duration';
        const speechOutput = 'What is the duration of the meeting?';
        const repromptSpeech = speechOutput;
        const cardContent = 'What is the duration of the meeting?';
        const cardTitle = 'Duration';
        const updatedIntent = intent;
        this.emit(':elicitSlotWithCard', slotToElicit, speechOutput, repromptSpeech, cardTitle, cardContent, updatedIntent);
    } else if (!intent.slots.NumberOfParticipants.value) {
        console.log('participants');
        const slotToElicit = 'Participants';
        const speechOutput = 'What are the number of participants?';
        const repromptSpeech = speechOutput;
        const cardContent = 'What are the number of participants?';
        const cardTitle = 'Participants';
        const updatedIntent = intent;
        this.emit(':elicitSlotWithCard', slotToElicit, speechOutput, repromptSpeech, cardTitle, cardContent, updatedIntent);
    } else {
        handlePlanMyTripIntentAllSlotsAreFilled(intent);
    }

}

function handlePlanMyTripIntentAllSlotsAreFilled(intent) {
    console.log('all slots are filled', intent);
    this.emit(':tell', `Booking a room in ${intent.slots.Location.value}, at ${intent.slots.Date.value}, ${intent.slots.Time.value} in ${intent.slots.Location.value} for ${intent.slots.NumberOfParticipants.value}`);
}
