import _ from 'lodash';
import { routeChanged } from './store/action-creators';

export const ROUTE_CANARY = 'canary';
export const ROUTE_GALLERY = 'gallery';
export const ROUTE_DEFAULT = 'default';

export default class Router {
    constructor() {
        this.store = null;
        this.route = null;
        this.initialized = false;
    }

    connect(route, store) {
        if (this.initialized) {
            console.warn('router already initialized');
            return;
        }

        this.initialized = true;
        this.store = store;
        this.route = route;

        route('/canaries/*', id => {
            store.dispatch(routeChanged(ROUTE_CANARY, { id }));
        });

        route('/canaries', () => {
            store.dispatch(routeChanged(ROUTE_GALLERY));
        });

        route('/', () => {
            // duplicate gallery for now
            store.dispatch(routeChanged(ROUTE_GALLERY));
        });
    }

    go(path) {
        return this.route(path);
    }

    mixin() {
        return {
            router: this,
            route: this.route
        };
    }
}