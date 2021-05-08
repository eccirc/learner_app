import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-10 flex bg-blue-400 rounded-lg m-4 items-center">
      <h1 className="text-3xl font-bold">Learners Page</h1>

      <Link to="/" className="ml-8 mr-4 items-end justify-end">
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
