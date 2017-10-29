export function isSlotValid(request, slotName) {
  const slot = request.intent.slots[slotName];
  let slotValue;

  // if we have a slot, get the text and store it into speechOutput
  if (slot && slot.value) {
    // we have a value in the slot
    slotValue = slot.value.toLowerCase();
    return slotValue;
  }
  // we didn't get a value in the slot.
  return false;
}
