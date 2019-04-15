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
  ];

  const roles = props.roles.filter(({ isDeleted }) => isDeleted === false);

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
  roles: PropTypes.array.isRequired,
};

const mapStateToProps = ({ roles }) => ({ roles: roles.roles });

export default connect(
  mapStateToProps,
  null
)(Roles);
