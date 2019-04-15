import { all } from 'redux-saga/effects';

import roles from './roles';

export default function* rootSaga() {
  yield all([roles()]);
}
