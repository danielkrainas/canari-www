/* bootstrap stuff */
import riot from 'riot';
import reduxMixin from 'riot-redux-mixin';

import './components/canary-list.tag';
import './components/canary-details.tag';

import LocalCanary from './models/local-canary';
import storeFactory from './store';
import { setCanaries } from './store/action-creators';
import * as wares from './store/middleware';

var store = storeFactory(wares.logging);
store.dispatch(setCanaries(LocalCanary.getAll()));

riot.mixin('redux', reduxMixin(store));
riot.mount('*', {});