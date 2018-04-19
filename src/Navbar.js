import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <header
    style={{
      padding: "1px",
      marginBottom: "8px",
      width: "100%",
      background: "#f0f0f0"
    }}
  >
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  </header>
);
export default Navbar;