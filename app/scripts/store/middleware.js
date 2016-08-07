import _ from 'lodash';

import { ROUTE_CHANGED, GO_ROUTE } from './states';

export const logging = store => next => action => {
    console.info('[store]', action.type, action);
    return next(action);
};

export const router = router => {
    return store => next => action => {
        if (action.type === GO_ROUTE) {
            router.go(action.path);
            return;
        } 

        next(action);
    };
};