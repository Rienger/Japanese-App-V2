import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLinks = ({ linkName, route }) => {
  return (
    <div>
      <NavLink
        className="font-semibold text-green-100 hover:text-green-400 animation duration-300 py-5 px-7"
        exact
        to={route}
        activeClassName="active"
      >
        {linkName}
      </NavLink>
    </div>
  );
};

export default NavbarLinks;
