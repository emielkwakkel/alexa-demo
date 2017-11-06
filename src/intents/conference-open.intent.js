export function conferenceOpen() {
  const speakersPartOne = getSpeakersIntroduction(1);
  const speakersPartTwo = getSpeakersIntroduction(2);
  const pronounceSogeti = 'I\'m far from replacing you <break time="0.3s" /> Remco. I still have a hard time pronouncing Sogeti. <break time="0.5s" /><phoneme alphabet="ipa" ph="sosheti">Sogeti</phoneme><break time="0.2s" /> it is right?';
  const introduction = `
    <p>The real question is: <break time="0.3s" /> Are <emphasis level="strong">you</emphasis> ready?</p>
    <p>${pronounceSogeti}</p>`;
  const speechPartOne = `
    <p>Today we have a very interesting lineup arranged for you.</p>
    <p>'Let me anounce to you: '${speakersPartOne}<break time="0.5s" /></p>`;
  const speechPartTwo = `
    <p>'After the break: '${speakersPartTwo}<break time="0.5s" /></p>
    <p>I hope you will all enjoy this evening!</p>
    <p>Chris, the floor is yours!</p>`;

  const repromptSpeech = 'Could you say that again?';
  const updatedIntent = this.event.request.intent;

  console.log('updatedIntent', updatedIntent); // eslint-disable-line no-console

  if (updatedIntent.slots.BeforeAfter && updatedIntent.slots.BeforeAfter.value === 'before') {
    this.emit(':ask', speechPartOne, repromptSpeech);
    updatedIntent.slots.BeforeAfter.value = null;
  } else if (updatedIntent.slots.BeforeAfter && updatedIntent.slots.BeforeAfter.value === 'after') {
    this.emit(':tell', speechPartTwo, repromptSpeech);
    updatedIntent.slots.BeforeAfter.value = null;
  } else {
    this.emit(':ask', introduction, repromptSpeech);
  }

  this.emit(':delegate', updatedIntent);
}

function getSpeakersIntroduction(part) {
  const speakers = [
    {
      name: 'Chris',
      talk: 'tell you about the why, and why you should be interested in chatbots right now',
      part: 1,
    },
    {
      name: 'Peter',
      talk: 'tell you about the Sogeti Vacency Bot. From concept to finished bot using the Microsoft Conversation Designer. Peter will give an exclusive preview of this framework!',
      part: 1,
    },
    {
      name: 'Emiel',
      talk: 'introduce you to Amazon Alexa, and how to build a skill using Node.js and, Amazon AWS and Alexa',
      part: 2,
    },
    {
      name: 'Mark',
      talk: 'tell you about AI, chatbots and machine learning! The AI trend is an important driver behind the rise of chatbots. Mark will tell you about how machine learning is applied to develop smarter chatbots',
      part: 2,
    },
    {
      name: 'Thijs',
      talk: 'tell you about Digital Happiness! From Clippy to the first AI-Human romance! I\'m sure it won\'t happen to you, but in near future people will get into a relationship with a robot or AI. Which trends can we spot in the use of chatbots and how do they connect to the start of an emotional economy',
      part: 2,
    },
  ];

  let speakersIntroduction = '';

  speakers.forEach((speaker) => {
    if (speaker.part === part) {
      speakersIntroduction = `${speakersIntroduction} <p><emphasis level="strong">${speaker.name}</emphasis> is going to ${speaker.talk}!</p><break time="0.5s" />`;
    }
  });

  return speakersIntroduction;
}
