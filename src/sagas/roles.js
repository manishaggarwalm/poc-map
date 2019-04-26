import { all, put, takeLatest, delay } from 'redux-saga/effects';
import { FETCH_ROLES, fetchRolesSuccess, ADD_ROLE, addRoleSucess, UPDATE_ROLE, updateRoleSucess, DELETE_ROLES, deleteRolesSucess } from '../actions/roles';

function* fetchRoles() {
  yield delay(200);
  const response = [
    {
      isDeleted: false,
      roleId: 1,
      roleName: 'Admin',
      status: 'Active',
    },
    {
      isDeleted: false,
      roleId: 2,
      roleName: 'Super Admin',
      status: 'Active',
    },
    {
      isDeleted: false,
      roleId: 3,
      roleName: 'User',
      status: 'Active',
    },
  ];

  yield put(fetchRolesSuccess(response));
}

function* addRole({ payload }) {
  yield put(addRoleSucess(payload));
}

function* updateRole({ payload }) {
  yield put(updateRoleSucess(payload));
}

function* deleteRoles({ payload }) {
  yield put(deleteRolesSucess(payload));
}

export default function* rolesSaga() {
  yield all([takeLatest(FETCH_ROLES, fetchRoles), takeLatest(ADD_ROLE, addRole), takeLatest(UPDATE_ROLE, updateRole), takeLatest(DELETE_ROLES, deleteRoles)]);
}
