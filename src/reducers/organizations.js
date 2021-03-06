import {FETCH_ORGANIZATIONS_REQUESTED,
  FETCH_ORGANIZATIONS_SUCCESS,
  FETCH_ORGANIZATIONS_FAILURE,
  VIEW_ORGANIZATION_SUCCESS,
  SELECT_ORGANIZATION_SUCCESS,
  MARK_ORGANIZATION_SUCCESS} from '../actions/organizations';

const initialState = {
  activeOrganization: null,
  errors: null,
  isLoading: false,
  markedOrganization: [],
  organizations: [],
  selectedOrganization: null,
};

const roles = (state = initialState, {
  type, payload, 
}) => {
  switch (type) {
    case FETCH_ORGANIZATIONS_REQUESTED:
      return {
        ...state,
        errors: null,
        isLoading: true,
      };

    case FETCH_ORGANIZATIONS_SUCCESS:
      return {
        ...state,
        activeOrganization: {
          ...payload.activeOrganization,
        },
        errors: null,
        isLoading: false,
        organizations: [...payload.organizations],
        selectedOrganization: [...payload.organizations],
      };

    case VIEW_ORGANIZATION_SUCCESS:
      return {
        ...state,
        activeOrganization: {
          ...payload,
        },
      };

    case FETCH_ORGANIZATIONS_FAILURE:
      return {
        ...state,
        errors: payload,
        isLoading: false,
      };
    case SELECT_ORGANIZATION_SUCCESS:
      return {
        ...state,
        selectedOrganization: [
          {
            ...payload,
          },
        ],
      };
    case MARK_ORGANIZATION_SUCCESS:
      return {
        ...state,
        markedOrganization: [...payload],
      };
    default:
      return state;
  }
};

export default roles;
