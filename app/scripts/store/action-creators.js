import _ from 'lodash';
import moment from 'moment/min/moment-with-locales.min.js';

import { SET_CANARIES } from './states';

export function setCanaries(canaries) {
	return {
		type: SET_CANARIES,
		data: _.cloneDeep(canaries || []).map(c => {
			c.$updated_at = moment(c.updated_at).fromNow();
			c.$ttl = moment.duration(c.ttl).humanize();
			c.$labels = (c.labels || []).map(l => {
				return { title: l }
			});
			
			return c;
		})
	};
}