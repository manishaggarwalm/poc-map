import React, { useState } from 'react';
import PropTypes from 'react-proptypes';
import { withRouter } from 'react-router';
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

  const roles = props.componentRoles.filter(({ isDeleted }) => isDeleted === false);
  const [search, handleSearch] = useState('');

  const filteredRoles = roles.filter(
    ({ roleName }) =>
      roleName
        .toLowerCase()
        .trim()
        .indexOf(search.toLowerCase().trim()) > -1
  );

  return (
    <div className="body-wrap">
      <div className="filterBar-wrap">
        <div className="actionBar">
          <div className="left-section">
            <div className="page-title">
              <span className="text">Roles</span>
            </div>
          </div>
          <div className="right-section">
            <div className="actionBar-actions">
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-light" onClick={() => props.history.push('/delete')}>
                  <span className="btn-icon">
                    <i className="fas fa-trash" />
                  </span>
                  <span className="btn-text d-none d-sm-none d-lg-inline-flex">Delete</span>
                </button>
              </div>
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-primary" onClick={() => props.history.push('/add')}>
                  <span className="btn-icon">
                    <i className="fas fa-plus" />
                  </span>
                  <span className="btn-text d-none d-sm-none d-lg-inline-flex">New</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-table">
        <div className="pagination-bar">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="input-group input-group-sm mb-5">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-search" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control js-search-table"
                  placeholder="Search"
                  value={search}
                  onChange={({ target: { value } }) => handleSearch(value)}
                />
                <div className="input-group-append">
                  <button className="btn btn-light" type="button" onClick={() => handleSearch('')}>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="input-group input-group-sm mb-5">
                <div className="input-group-prepend">
                  <button className="btn btn-light" type="button">
                    <i className="fas fa-chevron-left" />
                  </button>
                </div>
                <input type="text" className="form-control text-center" id="contacts-pagination-id" value="1-20/100" disabled="" onChange={() => {}} />
                <div className="input-group-append">
                  <button className="btn btn-light" type="button">
                    <i className="fas fa-angle-right" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 d-none d-sm-none d-md-block">
              <div className="btn-group btn-group-sm d-flex " role="group">
                <button type="button" className="btn btn-light w-100">
                  <i className="fas fa-sort-alpha-down" />
                </button>
                <button type="button" className="btn btn-light w-100">
                  <i className="fas fa-th" />
                </button>
                <button type="button" className="btn btn-light w-100">
                  <i className="fas fa-eraser" />
                </button>
                <button type="button" className="btn btn-light w-100">
                  <i className="fa fa-download" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="ag-theme-balham"
          style={{
            height: '300px',
          }}
        >
          <AgGridReact rowSelection="multiple" columnDefs={columnDefs} rowData={filteredRoles} />
        </div>
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
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

const mapStateToProps = ({ users: { roles } }) => ({
  componentRoles: roles.roles,
});

export default connect(
  mapStateToProps,
  null
)(withRouter(Roles));
