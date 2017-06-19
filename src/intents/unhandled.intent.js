export function unhandled() {
    this.emit(':ask', 'This request is unhandled at the moment', 'This request is unhandled at the moment.');
}