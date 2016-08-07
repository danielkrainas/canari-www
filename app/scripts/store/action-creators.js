import _ from 'lodash';
import moment from 'moment/min/moment-with-locales.min.js';

import { SET_CANARIES, SELECT_CANARY, ROUTE_CHANGED, GO_ROUTE } from './states';

export function setCanaries(canaries) {
	return {
		type: SET_CANARIES,
		data: _.cloneDeep(canaries || []).map(c => {
			let status = c.ttl > -1 ? 'alive' : 'dead';
			c.$local = {
				status: status,
				alive: (status === 'alive'),
				dead: (status === 'dead'),
				updated_at: moment(c.updated_at).fromNow(),
				ttl: moment.duration(c.ttl).humanize(),
				labels: (c.labels || []).map(l => {
					return { title: l }
				})
			};
			
			return c;
		})
	};
}

export function selectCanary(canaryOrId) {
	return {
		type: SELECT_CANARY,
		id: _.isString(canaryOrId) ? canaryOrId : canaryOrId.id
	};
}

export function showCanary(canaryOrId) {
	let id = _.isString(canaryOrId) ? canaryOrId : canaryOrId.id;
	return goRoute('/canaries/', id);
}

export function showGallery() {
	return goRoute('/canaries');
}

export function routeChanged(route, params = {}, query = {}) {
	return {
		type: ROUTE_CHANGED,
		route,
		params,
		query
	};
}

export function goRoute(...path) {
	if (path.length === 1) {
		path = path[0];
	} else {
		path = path.join('');
	}

	return {
		type: GO_ROUTE,
		path: path
	};
}
