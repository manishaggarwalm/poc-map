import { createAction } from 'redux-actions';

export const FETCH_ROLES = 'FETCH_ROLES';
export const fetchRoles = createAction(FETCH_ROLES);

export const FETCH_ROLES_SUCCESS = 'FETCH_ROLES_SUCCESS';
export const fetchRolesSuccess = createAction(FETCH_ROLES_SUCCESS);

export const ADD_ROLE = 'ADD_ROLE';
export const addRole = createAction(ADD_ROLE);

export const ADD_ROLE_SUCCESS = 'ADD_ROLE_SUCCESS';
export const addRoleSucess = createAction(ADD_ROLE_SUCCESS);

export const UPDATE_ROLE = 'UPDATE_ROLE';
export const updateRole = createAction(UPDATE_ROLE);

export const UPDATE_ROLE_SUCCESS = 'UPDATE_ROLE_SUCCESS';
export const updateRoleSucess = createAction(UPDATE_ROLE_SUCCESS);

export const DELETE_ROLES = 'DELETE_ROLES';
export const deleteRoles = createAction(DELETE_ROLES);

export const DELETE_ROLES_SUCCESS = 'DELETE_ROLES_SUCCESS';
export const deleteRolesSucess = createAction(DELETE_ROLES_SUCCESS);
