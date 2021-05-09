import PropTypes from "prop-types";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebaseConfig";

const Navbar = ({ isAdmin }) => {
  const [AdminEmail, setAdminEmail] = useState("");
  const [AdminPassword, setAdminPassword] = useState("");
  const [Login, setLogin] = useState(false);
  const history = useHistory();

  const LoginFB = (event, email, pass) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        alert("Successful Admin Login " + userCredential.user.email);
        setLogin(false);
      })
      .catch((err) => {
        alert("error loggin in Admin, reason: " + err);
        console.log(err);
      });
  };

  const LogoutFB = () => {
    auth.signOut().then(() => {
      alert("signed out of Admin account. Log back in to edit details");
      setAdminEmail("");
      setAdminPassword("");
      console.log("signed out Admin");
      history.push("/");
    });
  };

  return (
    <nav className="p-10 flex flex-wrap bg-blue-400 rounded-lg m-4 items-center">
      <div>
        <h1 className="text-3xl font-bold">Learners Page</h1>
        {!isAdmin && (
          <button
            onClick={() => setLogin(!Login)}
            className="text-white underline hover:text-pink-400"
          >
            Admin login
          </button>
        )}
        {isAdmin && (
          <button
            onClick={() => LogoutFB()}
            className="text-white underline hover:text-pink-400"
          >
            Logout admin
          </button>
        )}
      </div>

      <Link to="/" className="ml-8 mr-4 ">
        Home
      </Link>
      {isAdmin && (
        <Link to="/addnew" className="rounded-xl p-2 bg-pink-400 text-white">
          New Learner
        </Link>
      )}
      {Login && (
        <form className="ml-8">
          <input
            className="border-2 rounded-2xl p-2 mx-2 "
            type="email"
            placeholder="admin e-mail"
            value={AdminEmail}
            onChange={(e) => setAdminEmail(e.target.value)}
          />
          <input
            className="border-2 rounded-2xl p-2 "
            type="password"
            placeholder="admin password"
            value={AdminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
          />
          <button
            onClick={(event) => LoginFB(event, AdminEmail, AdminPassword)}
            className="rounded-xl mx-2 p-2 bg-pink-500 text-white "
          >
            Login
          </button>
        </form>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  LoginFB: PropTypes.func,
  LogoutFB: PropTypes.func,
  isAdmin: PropTypes.bool,
};

export default Navbar;
