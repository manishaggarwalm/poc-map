import {
  ADD_ROLE_SUCCESS,
  DELETE_ROLES_SUCCESS,
  FETCH_ROLES_SUCCESS,
  UPDATE_ROLE_SUCCESS,
} from '../actions/roles';

const initialState = {
  roles: [],
};

const roles = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ROLES_SUCCESS:
      return {
        ...state,
        roles: [
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
        ],
      };

    case UPDATE_ROLE_SUCCESS: {
      const roles = [...state.roles];

      const rolesIndex = roles.findIndex(
        ({ roleId }) => roleId === payload.roleId
      );

      roles[rolesIndex] = { ...roles[rolesIndex], ...payload };

      return {
        ...state,
        roles,
      };
    }

    case DELETE_ROLES_SUCCESS: {
      let roles = [...state.roles];

      roles = roles.map((role) => {
        const isDeleted = payload.find(
          ({ role: { roleId: selectedRoleId } }) =>
            role.roleId === selectedRoleId
        );

        if (isDeleted) {
          return { ...role, isDeleted: true };
        }

        return role;
      });

      return {
        ...state,
        roles,
      };
    }

    case ADD_ROLE_SUCCESS:
      return {
        ...state,
        roles: [
          ...state.roles,
          {
            isDeleted: false,
            roleId: state.roles.length + 1,
            ...payload,
          },
        ],
      };

    default:
      return state;
  }
};

export default roles;
