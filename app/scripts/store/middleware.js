import request from 'browser-request';
import _ from 'lodash';

export const logging = store => next => action => {
    console.info('[store]', action.type, action);
    return next(action);
};

