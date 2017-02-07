import { buildSpeechletResponse } from '../response/build-speechlet-response';

export function handleCountryCheckIntent(intent, session, callback) {
    console.log('intent', intent);
    const country = intent.slots.Countries.value;
    const title = 'Sogeti Country Check';
    const output = 'Sogeti in ' + country;

    callback(session.attributes,
        buildSpeechletResponse(title, output, undefined, true));
}