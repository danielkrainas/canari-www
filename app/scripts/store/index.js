import _ from 'lodash';
import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers';
import * as wares from './middleware';

const defaultState = {
	canaries: [{
		id: '42304232-ef60-47b6-a293-117a618636ae',
		ttl: 1000,
		updated_at: 1470457077120,
		title: 'Mock Canary',
		message: 'Lalalala this is the message',
		labels: ['warrant','privacy'],
		signature: '',
		pubkey: '',
		pubkey_url: ''
	}],

	selected: {
		id: '42304232-ef60-47b6-a293-117a618636ae',
		ttl: 1000,
		updated_at: 1470457077120,
		title: 'Mock Canary',
		message: 'Lalalala this is the message',
		labels: ['warrant','privacy'],
		signature: '',
		pubkey: '',
		pubkey_url: ''
	}
};

export default function storeFactory(...middlewares) {
	return createStore(reducer, defaultState, applyMiddleware(...middlewares));
}
