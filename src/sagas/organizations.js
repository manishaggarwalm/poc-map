import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_ORGANIZATIONS,
  fetchOrganizationsSuccess,
  fetchOrganizationsRequested,
  fetchOrganizationsFailure,
  VIEW_ORGANIZATION,
  viewOrganizationSuccess,
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

    updatedItems[0].isOpened = true;

    yield put(
      fetchOrganizationsSuccess({
        activeOrganization: { locationID: updatedItems[0].locationID, locationName: updatedItems[0].locationName },
        organizations: updatedItems,
      })
    );
  } else {
    yield put(fetchOrganizationsFailure(response));
  }
}

function* viewOrganization({ payload }) {
  yield put(viewOrganizationSuccess(payload));
}

export default function* rolesSaga() {
  yield all([takeLatest(FETCH_ORGANIZATIONS, fetchOrganizations), takeLatest(VIEW_ORGANIZATION, viewOrganization)]);
}
