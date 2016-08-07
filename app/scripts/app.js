/* bootstrap stuff */
import riot from 'riot';
import reduxMixin from 'riot-redux-mixin';
import route from 'riot-route';

import './components/appshell.tag';
import './components/canary-list.tag';
import './components/canary-details.tag';

import Router from './router';
import LocalCanary from './models/local-canary';
import storeFactory from './store';
import { setCanaries } from './store/action-creators';
import * as wares from './store/middleware';

var router = new Router();
var store = storeFactory(wares.logging, wares.router(router));

router.connect(route.create(), store);

store.dispatch(setCanaries(LocalCanary.getAll()));

riot.mixin('redux', reduxMixin(store));
riot.mixin('router', router.mixin());
riot.mount('*', {});

route.start(true);
