import React from "react";
import { Link } from "react-router-dom";
import SingedInLinks from "./SignedInLinks";
import SingedOutLink from "./SignedOutLinks";

function NavBar() {
  return (
    <nav className="nav.nav-wrapper grey">
      <div className="container">
        <Link to="/" className="brand-logo">
          Article
        </Link>
        <SingedInLinks />
        <SingedOutLink />
      </div>
    </nav>
  );
}

export default NavBar;
