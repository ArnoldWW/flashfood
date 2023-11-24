import { Link } from "react-router-dom";

const MyLink = (params) => {
  return (
    <Link
      {...params}
      className="hover:underline"
      onClick={() => window.scrollTo(0, 0)}
    >
      {params.children}
    </Link>
  );
};

export default MyLink;
