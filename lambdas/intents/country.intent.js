const https = require('https');
require('babel-polyfill');

import { buildSpeechletResponse } from '../response/build-speechlet-response';

export function handleCountryIntent(intent, session, callback) {
    console.log('intent', intent);
    const country = intent.slots.Country.value;
    const title = 'Sogeti Country information';
    const output = 'Sogeti in ' + country;
    const reprompt = undefined;

    webServiceCall('offices', offices => {
        console.log('offices', offices);

        const office = Array.find(offices, office => {
            return office.country === country;
        });

        console.log('office', office);


        callback(session.attributes,
            buildSpeechletResponse(title, output, reprompt, true));
    });
}

function webServiceCall(table, func) {
    const options = {
        host: 'sogeti-demo.firebaseio.com',
        path: `/${table}.json`,
        port: 443
    };

    return https.get(options, resp => {
        let body = '';
        resp.on('data', chunk => {
            //do something with chunk
            body += chunk
        }).on('end', () => {
            return func(body);
        });
    }).on('error', error => {
        console.log('Got error: ' + error.message);
    })
}