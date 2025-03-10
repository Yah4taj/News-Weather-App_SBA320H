import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-center items-center gap-8">
      <Link 
        to="/" 
        className="text-xl font-semibold hover:text-gray-300 transition duration-300"
      >
        Weather
      </Link>
      <Link 
        to="/news" 
        className="text-xl font-semibold hover:text-gray-300 transition duration-300"
      >
        News
      </Link>
    </nav>
  );
};

export default Nav;
