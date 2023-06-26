import { NavLink } from "react-router-dom";

const MyNavLink = (params) => {
  console.log(params);
  return (
    <NavLink
      {...params}
      className={({ isActive }) => (isActive ? "font-bold" : "hover:underline")}
    >
      {params.children}
    </NavLink>
  );
};

export default MyNavLink;
