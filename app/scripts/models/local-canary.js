import 'store.js' as store from 'store.js';

const CANARIES_KEY = 'v1.canaries';

export default class LocalCanary {
	constructor() {

	}

	static getAll() {
		return store.get(CANARIES_KEY) || [];
	}
}