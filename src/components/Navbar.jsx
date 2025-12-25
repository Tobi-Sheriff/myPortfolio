import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">my<span className="pink">Portfolio</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navig collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav navlinks">
            <a className="nav-link active" aria-current="page" href="/#projects">Projects</a>
            <a className="nav-link" href="/#skill-sets">Skills</a>
            <a className="nav-link" href="/#contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
