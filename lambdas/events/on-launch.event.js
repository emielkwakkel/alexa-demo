import { buildSpeechletResponse } from '../response/build-speechlet-response';

/**
 * Called when the user invokes the skill without specifying what they want.
 */
export function onLaunch(launchRequest, session, callback) {
    console.log('onLaunch requestId=' + launchRequest.requestId + ', sessionId=' + session.sessionId);

    const cardTitle = 'Sogeti Demo';
    const speechOutput = 'This is the Sogeti demo skill!';
    callback(session.attributes,
        buildSpeechletResponse(cardTitle, speechOutput, '', true));
}