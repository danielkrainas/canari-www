import _ from 'lodash';
import { selectCanary } from './store/action-creators';

export default class Router {
    constructor(route, store) {
        this.setup(route);
        this.route = route;
        this.store = store;
    }

    setup(route) {
        route('/canaries/*', id => {
            this.store.dispatch(selectCanary(id));
        });
    }

    mixin() {
        return {
            routing: {
                go: path => {
                    this.route(path);
                },

                canary: canary => {
                    let id = _.isString(canary) ? canary : canary.id;
                    this.route('/canaries/' + id);
                },

                router: this
            }
        };
    }
}