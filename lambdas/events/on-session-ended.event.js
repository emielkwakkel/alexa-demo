/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
export function onSessionEnded(sessionEndedRequest, session) {
    console.log('onSessionEnded requestId=' + sessionEndedRequest.requestId + ', sessionId=' + session.sessionId);
    // Add any cleanup logic here
}