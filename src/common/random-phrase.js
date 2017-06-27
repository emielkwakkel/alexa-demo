export function randomPhrase(array) {
	// the argument is an array [] of words or phrases
	let i = 0;
	i = Math.floor(Math.random() * array.length);
	return(array[i]);
}
