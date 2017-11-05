export function delegateSlotCollection() { // eslint-disable-line consistent-return
  if (this.event.request.dialogState === 'STARTED') {
    console.log('Dialog started'); // eslint-disable-line no-console

    const updatedIntent = this.event.request.intent;
    this.emit(':delegate', updatedIntent);
  } else if (this.event.request.dialogState !== 'COMPLETED') {
    console.log('Dialog in progress'); // eslint-disable-line no-console

    this.emit(':delegate');
  } else {
    console.log('Dialog completed'); // eslint-disable-line no-console

    return this.event.request.intent;
  }
}
