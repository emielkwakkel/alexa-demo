/**
 * Helper functions to build responses
 * @param {string} title Card title
 * @param {string} output Text to output as speech
 * @param {string} repromptText Text to ask
 * @param {boolean} shouldEndSession Continue session?
 * @return {Object} The complete response object to provide to Alexa
 */
export function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: 'PlainText',
            text: output
        },
        card: {
            type: 'Simple',
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: 'PlainText',
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}
