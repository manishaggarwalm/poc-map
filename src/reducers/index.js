import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import roles from './roles';
import users from './users';
import organizations from './organizations';

const rootReducer = (history) =>
  combineReducers({
    app: combineReducers({ users }),
    organizations,
    router: connectRouter(history),
    users: combineReducers({ roles }),
  });

export default rootReducer;
