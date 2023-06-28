import { NavLink } from "react-router-dom";

const MyNavLink = (params) => {
  console.log(params);
  return (
    <NavLink
      {...params}
      className={({ isActive }) => (isActive ? "font-bold" : "hover:underline")}
      onClick={() => window.scrollTo(0, 0)}
    >
      {params.children}
    </NavLink>
  );
};

export default MyNavLink;
