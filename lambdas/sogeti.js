'use strict';

// events
import { onSessionStarted } from './events/on-session-started.event';
import { onSessionEnded } from './events/on-session-ended.event';
import { onIntent } from './events/on-intent.event';
import { onLaunch } from './events/on-launch.event';

// response
import { buildResponse } from './response/build-response';

exports.handler = function(event, context) {
    try {
        console.log('event.session.application.applicationId=' + event.session.application.applicationId);

        /**
         * Make sure only our skill can send requests to this function.
         */
        if (event.session.application.applicationId !== 'amzn1.ask.skill.68274e8f-12ac-47a4-9fb4-a16ac4bf30fa') {
            context.fail('Invalid Application ID');
        }

        if (event.session.new) {
            onSessionStarted({
                requestId: event.request.requestId
            }, event.session);
        }

        if (event.request.type === 'LaunchRequest') {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === 'IntentRequest') {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === 'SessionEndedRequest') {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (error) {
        context.fail('Exception: ' + error);
    }
};



