import { all } from 'redux-saga/effects';

import roles from './roles';
import organizations from './organizations';

export default function* rootSaga() {
  yield all([roles(), organizations()]);
}
