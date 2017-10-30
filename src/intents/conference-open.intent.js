export function conferenceOpen() {
  const speakersIntroduction = getSpeakersIntroduction();
  const pronounceSogeti = 'I\'m far from replacing you <break time="0.3s" /> Remco. I still have a hard time pronouncing Sogeti. <break time="0.5s" /><phoneme alphabet="ipa" ph="sosheti">Sogeti</phoneme> it is right?';
  const speechOutput = `
    <p>The real question is: <break time="0.5s" /> Are <emphasis level="strong">you</emphasis> ready?</p><break time="1s" />
    <p>${pronounceSogeti}</p>
    <p>Today we have a very interesting lineup arranged for you.</p>
    <p>${speakersIntroduction}<break time="0.5s" /></p>
    <p>I hope you will all enjoy this evening!</p>`;

  const repromptSpeech = 'Reprompting';

  this.emit(':ask', speechOutput, repromptSpeech);
}

function getSpeakersIntroduction() {
  const speakers = [
    {
      name: 'Emiel',
      talk: 'Introduce you to developing a skill for Amazon Alexa.',
    },
    {
      name: 'Chris',
      talk: 'Show you the Microsoft Bot Framework.',
    },
  ];

  let speakersIntroduction = 'Let me anounce to you: ';

  speakers.forEach((speaker) => {
    speakersIntroduction = `${speakersIntroduction} <p><emphasis level="strong">${speaker.name}</emphasis> is going to ${speaker.talk}!</p><break time="0.5s" />`;
  });

  return speakersIntroduction;
}
