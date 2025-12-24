import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>MAGNANIMOUS CLUB</h1>
      <div className="content-wrap">
        <Link to="/">Home</Link>{" | "}
        <Link to="/about">About</Link>{" | "}
        <Link to="/donation">Donation</Link>{" | "}
        <Link to="/feedback">Feedback</Link>{" | "}
        <Link to="/volunteer">Volunteer</Link>
      </div>
    </nav>
  );
};

export default Navbar;

