import riot from 'riot';
import reduxMixin from 'riot-redux-mixin';

//import './components/instancelist.tag';

import storeFactory from './store';
import { setInstances } from './store/action-creators';
import * as wares from './store/middleware';

var store = storeFactory(wares.logging);

riot.mixin('redux', reduxMixin(store));
riot.mount('*', {});