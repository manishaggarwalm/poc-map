import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import rootReducer from './reducers';
import rootSaga from './sagas';

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = (preloadedState) => {
  const sagaMiddleware = createSagaMiddleware();

  const configStore = createStore(
    rootReducer(history),
    preloadedState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return configStore;
};

export default store;
