import React from 'react';

const MultiCheckTreeControl = () => {
  return (
    <div className="treeControl">
      <div className="treeControl-search-wrap">
        <div className="input-group input-group-sm">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-search" />
            </span>
          </div>
          <input type="text" className="form-control treeControl-search-textBox" placeholder="Search" />
        </div>
      </div>
      <div className="treeBody-wrap">
        <div className="treeBody">
          <ul className="list-group">
            <li className="list-group-item openTree">
              <div className="treeNode">
                <div className="nodeHandler">
                  <a href="/">
                    <i className="fas fa-angle-right" />
                    <i className="fas fa-angle-down" />
                    <i className="fas fa-circle" />
                  </a>
                </div>
                <div className="nodeContent">
                  <label className="treeCheckbox">
                    <input type="checkbox" name="" />
                  </label>
                  <a href="/" className="nodeContent-item">
                    <span className="text">Company 0</span>
                  </a>
                </div>
              </div>
              <div className="treeBody">
                <ul className="list-group">
                  <li className="list-group-item noTree">
                    <div className="treeNode">
                      <div className="nodeHandler">
                        <a href="/">
                          <i className="fas fa-angle-right" />
                          <i className="fas fa-angle-down" />
                          <i className="fas fa-circle" />
                        </a>
                      </div>
                      <div className="nodeContent">
                        <label className="treeCheckbox">
                          <input type="checkbox" name="" />
                        </label>
                        <a href="/" className="nodeContent-item">
                          <span className="text">Company 1</span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item noTree">
                    <div className="treeNode">
                      <div className="nodeHandler">
                        <a href="/">
                          <i className="fas fa-angle-right" />
                          <i className="fas fa-angle-down" />
                          <i className="fas fa-circle" />
                        </a>
                      </div>
                      <div className="nodeContent">
                        <label className="treeCheckbox">
                          <input type="checkbox" name="" />
                        </label>
                        <a href="/" className="nodeContent-item">
                          <span className="text">Company 2</span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item noTree">
                    <div className="treeNode">
                      <div className="nodeHandler">
                        <a href="/">
                          <i className="fas fa-angle-right" />
                          <i className="fas fa-angle-down" />
                          <i className="fas fa-circle" />
                        </a>
                      </div>
                      <div className="nodeContent">
                        <label className="treeCheckbox">
                          <input type="checkbox" name="" />
                        </label>
                        <a href="/" className="nodeContent-item">
                          <span className="text">Company 3</span>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="list-group-item openTree">
              <div className="treeNode">
                <div className="nodeHandler">
                  <a href="/">
                    <i className="fas fa-angle-right" />
                    <i className="fas fa-angle-down" />
                    <i className="fas fa-circle" />
                  </a>
                </div>
                <div className="nodeContent">
                  <label className="treeCheckbox">
                    <input type="checkbox" name="" />
                  </label>
                  <a href="/" className="nodeContent-item">
                    <span className="text">Company B</span>
                  </a>
                </div>
              </div>
              <div className="treeBody">
                <ul className="list-group">
                  <li className="list-group-item noTree">
                    <div className="treeNode">
                      <div className="nodeHandler">
                        <a href="/">
                          <i className="fas fa-angle-right" />
                          <i className="fas fa-angle-down" />
                          <i className="fas fa-circle" />
                        </a>
                      </div>
                      <div className="nodeContent">
                        <label className="treeCheckbox">
                          <input type="checkbox" name="" />
                        </label>
                        <a href="/" className="nodeContent-item">
                          <span className="text">Company 1</span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item noTree">
                    <div className="treeNode">
                      <div className="nodeHandler">
                        <a href="/">
                          <i className="fas fa-angle-right" />
                          <i className="fas fa-angle-down" />
                          <i className="fas fa-circle" />
                        </a>
                      </div>
                      <div className="nodeContent">
                        <label className="treeCheckbox">
                          <input type="checkbox" name="" />
                        </label>
                        <a href="/" className="nodeContent-item">
                          <span className="text">Company 2</span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item noTree">
                    <div className="treeNode">
                      <div className="nodeHandler">
                        <a href="/">
                          <i className="fas fa-angle-right" />
                          <i className="fas fa-angle-down" />
                          <i className="fas fa-circle" />
                        </a>
                      </div>
                      <div className="nodeContent">
                        <label className="treeCheckbox">
                          <input type="checkbox" name="" />
                        </label>
                        <a href="/" className="nodeContent-item">
                          <span className="text">Company 3</span>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MultiCheckTreeControl;
