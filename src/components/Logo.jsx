import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="w-28">
      <img src="/logo.svg" />
    </Link>
  );
};

export default Logo;
