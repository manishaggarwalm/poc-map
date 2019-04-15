import React from 'react';

const Form = () => {
  return (
    <div className="form-row">
      <div className="form-group required row col-md-6 col-lg-6 col-xl-6">
        <label className="col-form-label col-form-label-sm col-md-12 col-lg-12 col-xl-4 text-lg-left text-xl-right">
          Name
        </label>
        <div className="col-md-12 col-lg-12 col-xl-6">
          <div className="input-group input-group-sm">
            <input
              type="text"
              className="form-control form-control-sm"
              id="OrganizationNameInput-id"
              required=""
            />
          </div>
        </div>
      </div>
      <div className="form-group row col-md-6 col-lg-6 col-xl-6">
        <label className="col-form-label col-form-label-sm col-md-12 col-lg-12 col-xl-4 text-lg-left text-xl-right">
          Type
        </label>
        <div className="col-md-12 col-lg-12 col-xl-6">
          <div className="input-group input-group-sm">
            <select
              className="custom-select custom-select-sm"
              id="OrganizationTypeInput-id"
            >
              <option selected="">Open this select menu</option>
              <option value="Enterprise">Enterprise</option>
              <option value="Organization">Organization</option>
              <option value="Branch">Branch</option>
              <option value="Dealer">Dealer</option>
              <option value="Contractor">Contractor</option>
              <option value="Vendor">Vendor</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
