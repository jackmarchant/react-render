import React from 'react';

const Header = props => {
  return (
    <header className="intro-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div className="site-heading">
              <h1>Jack Marchant</h1>
              <hr className="small" />
              <span className="subheading">Web Developer</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;