export function delegateSlotCollection(){
	if (this.event.request.dialogState === "STARTED") {
		console.log("Dialog started");

		const updatedIntent = this.event.request.intent;
		this.emit(":delegate", updatedIntent);
	} else if (this.event.request.dialogState !== "COMPLETED") {
		console.log("Dialog in progress");

		this.emit(":delegate");
	} else {
		console.log("Dialog completed");

		return this.event.request.intent;
	}
}