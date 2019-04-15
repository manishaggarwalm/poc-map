import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import rootReducer from './reducers';
import rootSaga from './sagas';

export const history = createBrowserHistory();

const store = preloadedState => {
  const sagaMiddleware = createSagaMiddleware();

  const configStore = createStore(
    rootReducer(history),
    preloadedState,
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);

  return configStore;
};

export default store;
