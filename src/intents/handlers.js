import { bookARoom } from './book-a-room.intent';
import { launchRequest } from './launch-request.intent';
import { unhandled } from './unhandled.intent';

export const handlers = {
    'BookARoom': bookARoom,
    'Unhandled': unhandled,
    'LaunchRequest': launchRequest,
};