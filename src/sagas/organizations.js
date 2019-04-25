import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_ORGANIZATIONS,
  fetchOrganizationsSuccess,
  fetchOrganizationsRequested,
  fetchOrganizationsFailure,
  VIEW_ORGANIZATION,
  viewOrganizationSuccess,
  SELECT_ORGANIZATION,
  selectOrganizationSuccess,
  SELECT_ORGANIZATION_SUCCESS,
} from '../actions/organizations';

const callApi = async () => {
  try {
    const data = await fetch('/json/companiesTree.json');
    const jsonData = await data.json();

    return jsonData;
  } catch (error) {
    return error;
  }
};

function* fetchOrganizations() {
  yield put(fetchOrganizationsRequested());

  const response = yield call(callApi);

  if (response && response.length) {
    let updatedItems = [...response];

    updatedItems[0].toggled = true;

    yield put(
      fetchOrganizationsSuccess({
        activeOrganization: { ...updatedItems[0] },
        organizations: updatedItems,
      })
    );
  } else {
    yield put(fetchOrganizationsFailure(response));
  }
}

function* viewOrganizationHandler({ payload }) {
  yield put(viewOrganizationSuccess(payload));
}

function* selectOrganization({ payload }) {
  const updatedItems = { ...payload, toggled: true };

  yield put(selectOrganizationSuccess(updatedItems));
}

export default function* rolesSaga() {
  yield all([
    takeLatest(FETCH_ORGANIZATIONS, fetchOrganizations),
    takeLatest(VIEW_ORGANIZATION, viewOrganizationHandler),
    takeLatest(SELECT_ORGANIZATION, selectOrganization),
    takeLatest(SELECT_ORGANIZATION_SUCCESS, viewOrganizationHandler),
  ]);
}
