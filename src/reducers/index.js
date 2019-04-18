import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import roles from './roles';
import users from './users';

const rootReducer = (history) =>
  combineReducers({
    app: combineReducers({ users }),
    router: connectRouter(history),
    users: combineReducers({ roles }),
  });

export default rootReducer;
