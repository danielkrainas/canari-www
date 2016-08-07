import _ from 'lodash';

import { SET_CANARIES, SELECT_CANARY, ROUTE_CHANGED } from './states';
import { ROUTE_CANARY, ROUTE_GALLERY } from '../router';

export default reducer = (state, action) => {
	state = _.cloneDeep(state);
	if (action.type === ROUTE_CHANGED) {
		changeRoutes(state, action);
	}

	if (action.type === SET_CANARIES) {
		state = _.assign(state, {
			canaries: action.data
		});
	} else if (action.type === SELECT_CANARY) {
		state = _.assign(state, {
			selected: _.clone(_.find(state.canaries, { id: action.id }))
		});
	}

	updateSelection(state);
	return state;
};

function changeRoutes(state, action) {
	state.route = {
		name: action.route,
		params: action.params,
		query: action.query
	};

	switch (action.route) {
		case ROUTE_CANARY:
			state.selected = _.clone(_.find(state.canaries, { id: action.params.id }));
			break;

		case ROUTE_GALLERY:
			state.selected = null;
			break;
	}
}

function updateSelection(state) {
	if (state.selected) {
		var selected = _.find(state.canaries, { id: state.selected.id }) || null;
		if (!selected) {
			state.selected.invalid = true;
			state.canaries.unshift(_.clone(state.selected));
		} else {
			selected.selected = true;
			state.selected = _.clone(selected);
		}
	}

	state.canaries.forEach(c => {
		c.selected = state.selected && state.selected.id === c.id;
	});
}