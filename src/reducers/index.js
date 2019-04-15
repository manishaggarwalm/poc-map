import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import roles from './roles';

const rootReducer = history =>
  combineReducers({
    roles,
    router: connectRouter(history),
  });

export default rootReducer;
