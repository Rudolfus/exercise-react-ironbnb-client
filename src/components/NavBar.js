import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/apartments">Apartments</NavLink>
      <NavLink to="/apartments/create">Create</NavLink>
    </div>
  );
};

export default NavBar;
