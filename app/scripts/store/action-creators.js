import _ from 'lodash';
import moment from 'moment/min/moment-with-locales.min.js';

import { SET_CANARIES, SELECT_CANARY } from './states';

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