import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-10 flex bg-blue-400 rounded-lg m-4 items-center">
      <div>
        <h1 className="text-3xl font-bold">Learners Page</h1>
        <Link to="/admin" className="text-white underline hover:text-pink-400">
          Admin login
        </Link>
      </div>

      <Link to="/" className="ml-8 mr-4 ">
        Home
      </Link>
      <Link to="/addnew" className="rounded-xl p-2 bg-pink-400 text-white">
        New Learner
      </Link>
    </nav>
  );
};

Navbar.propTypes = {
  handleAddLearner: PropTypes.func,
};

export default Navbar;
