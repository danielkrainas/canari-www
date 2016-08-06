import _ from 'lodash';

import { SET_CANARIES } from './states';

export default reducer = (state, action) => {
	state = _.cloneDeep(state);
	if (action.type === SET_CANARIES) {
		state = _.assign(state, {
			canaries: action.data
		});
	}

	updateSelection(state);
	return state;
};

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
	} else if (state.canaries.length > 0) {
		state.canaries[0].selected = true;
		state.selected = _.clone(state.canaries[0]);
	}

	state.canaries.forEach(i => {
		if (!state.selected || state.selected.name !== i.name) {
			i.selected = false;
		}
	});
}