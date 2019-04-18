import React from 'react';
import PropTypes from 'react-proptypes';
import { connect } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const Roles = (props) => {
  const columnDefs = [
    {
      checkboxSelection: true,
      field: 'roleId',
      filter: true,
      headerName: 'Role ID',
      sortable: true,
    },
    {
      field: 'roleName',
      filter: true,
      headerName: 'Role Name',
      sortable: true,
    },
    {
      field: 'status',
      filter: true,
      headerName: 'Status',
      sortable: true,
    },
  ];

  const roles = props.componentRoles.filter(
    ({ isDeleted }) => isDeleted === false
  );

  return (
    <div>
      <div
        className="ag-theme-balham"
        style={{
          height: '300px',
        }}
      >
        <AgGridReact
          rowSelection="multiple"
          columnDefs={columnDefs}
          rowData={roles}
        />
      </div>
    </div>
  );
};

Roles.propTypes = {
  componentRoles: PropTypes.arrayOf(
    PropTypes.shape({
      isDeleted: PropTypes.bool.isRequired,
      roleId: PropTypes.number.isRequired,
      roleName: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = ({ users: { roles } }) => ({
  componentRoles: roles.roles,
});

export default connect(
  mapStateToProps,
  null
)(Roles);
