/**
 * Build basic response
 * @param sessionAttributes Attributes
 * @param speechletResponse Response
 * @return {Object} The complete response object to provide to Alexa
 */
export function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: '1.0',
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}
