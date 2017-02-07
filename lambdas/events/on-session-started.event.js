/**
 * Called when the session starts.
 */
export function onSessionStarted(sessionStartedRequest, session) {
    console.log('onSessionStarted requestId=' + sessionStartedRequest.requestId + ', sessionId=' + session.sessionId);

    // add any session init logic here
}