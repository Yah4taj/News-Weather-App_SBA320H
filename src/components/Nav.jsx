import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="p-4 bg-blue-600 text-white flex gap-4">
      <Link to="/">Weather</Link>
      <Link to="/news">News</Link>
    </nav>
  );
};

export default Nav;
