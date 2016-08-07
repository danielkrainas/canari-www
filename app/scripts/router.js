import { selectCanary } from './store/action-creators';

export default class Router {
    constructor(route, store) {
        this.setup(route);
        this.store = store;
    }

    setup(route) {
        route('/canaries/*', id => {
            this.store.dispatch(selectCanary(id));
        });
    }
}