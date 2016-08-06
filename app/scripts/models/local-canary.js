import store from 'store2';

const CANARIES_KEY = 'v1.canaries';

export default class LocalCanary {
	constructor() {

	}

	static getAll() {
		//return store.get(CANARIES_KEY) || [];
		return [{
			id: '42304232-ef60-47b6-a293-117a618636ae',
			ttl: 1000,
			updated_at: 1470457077120,
			title: 'Mock Canary',
			message: 'Lalalala this is the message',
			labels: ['warrant','privacy'],
			signature: '',
			pubkey: '',
			pubkey_url: ''
		}];
	}
}