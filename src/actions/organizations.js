import { createAction } from 'redux-actions';

export const FETCH_ORGANIZATIONS = 'FETCH_ORGANIZATIONS';
export const fetchOrganizations = createAction(FETCH_ORGANIZATIONS);

export const FETCH_ORGANIZATIONS_REQUESTED = 'FETCH_ORGANIZATIONS_REQUESTED';
export const fetchOrganizationsRequested = createAction(FETCH_ORGANIZATIONS_REQUESTED);

export const FETCH_ORGANIZATIONS_SUCCESS = 'FETCH_ORGANIZATIONS_SUCCESS';
export const fetchOrganizationsSuccess = createAction(FETCH_ORGANIZATIONS_SUCCESS);

export const FETCH_ORGANIZATIONS_FAILURE = 'FETCH_ORGANIZATIONS_FAILURE';
export const fetchOrganizationsFailure = createAction(FETCH_ORGANIZATIONS_FAILURE);

export const VIEW_ORGANIZATION = 'VIEW_ORGANIZATION';
export const viewOrganization = createAction(VIEW_ORGANIZATION);

export const VIEW_ORGANIZATION_SUCCESS = 'VIEW_ORGANIZATION_SUCCESS';
export const viewOrganizationSuccess = createAction(VIEW_ORGANIZATION_SUCCESS);

export const SELECT_ORGANIZATION = 'SELECT_ORGANIZATION';
export const selectOrganization = createAction(SELECT_ORGANIZATION);

export const SELECT_ORGANIZATION_SUCCESS = 'SELECT_ORGANIZATION_SUCCESS';
export const selectOrganizationSuccess = createAction(SELECT_ORGANIZATION_SUCCESS);

export const MARK_ORGANIZATION = 'MARK_ORGANIZATION';
export const markOrganization = createAction(MARK_ORGANIZATION);

export const MARK_ORGANIZATION_SUCCESS = 'MARK_ORGANIZATION_SUCCESS';
export const markOrganizationSuccess = createAction(MARK_ORGANIZATION_SUCCESS);
