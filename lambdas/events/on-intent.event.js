// intents
import { handleCountryIntent } from '../intents/country.intent';
import { handleCountryCheckIntent } from '../intents/country-check.intent';

/**
 * Called when the user specifies an intent for this skill.
 */
export function onIntent(intentRequest, session, callback) {
    console.log('onIntent requestId=' + intentRequest.requestId + ', sessionId=' + session.sessionId);

    const intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // dispatch custom intents to handlers here
    if (intentName === 'CountryIntent') {
        handleCountryIntent(intent, session, callback);
    } else if (intentName === 'CountryCheckIntent') {
        handleCountryCheckIntent(intent, session, callback);
    } else {
        throw 'Invalid intent';
    }
}