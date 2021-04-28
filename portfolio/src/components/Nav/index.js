import React from "react";
import { useHistory } from "react-router-dom";

function Nav() {
  const history = useHistory();
  console.log(history.location.pathname);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-custom">

      <div className="container">

        <a className="navbar-brand logo" href="index.html">Chris Risseler</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <div className="navbar-nav ml-auto mt-2 mt-lg-0">
            <a className={`nav-link ${history.location.pathname === "/" ? "active" : ""}`} href="/">Home <span className="sr-only">(current)</span></a>
            <a className={`nav-link ${history.location.pathname === "/portfolio" ? "active" : ""}`} href="/portfolio">Portfolio</a>
            {/* <a className="nav-link" href="contact.html">Contact</a> */}
          </div>
        </div>

      </div>

    </nav>
  );
}

export default Nav;
