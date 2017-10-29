import * as Alexa from 'alexa-sdk';
import { handlers } from './intents/handlers';
import { config } from './config';

exports.handler = function (event, context, callback) {
  const alexa = Alexa.handler(event, context, callback);
  alexa.appId = config.APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
