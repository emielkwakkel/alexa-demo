export function conferenceOpen() {
  const speakersIntroduction = getSpeakersIntroduction();
  const pronounceSogeti = 'I\'m far from replacing you Remco. I still have a hard time pronouncing Sogeti. Sogeti it is right?';
  const speechOutput = `${pronounceSogeti}. Today we have a very interesting lineup arranged for you. ${speakersIntroduction}`;

  this.emit(':ask', speechOutput, repromtSpeech);
}

function getSpeakersIntroduction() {
  const speakers = [
    {
      name: 'Emiel',
      talk: 'Introduce you to developing a skill for Amazon Alexa.',
    },
    {
      name: 'Chris den Arend',
      talk: 'Show you the Microsoft Bot Framework.',
    },
  ];

  let speakersIntroduction = 'Let me anounce to you: ';

  speakers.forEach((speaker) => {
    speakersIntroduction = `${speakersIntroduction} ${speaker.name} is going to ${speaker.talk} `;
  });

  return speakersIntroduction;
}
