import { SET_CANARIES } from './states';

export function setCanaries(canaries) {
	return {
		type: SET_CANARIES,
		data: canaries
	};
}