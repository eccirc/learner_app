import Navbar from "./Navbar";
import Home from "./Home";
//import { useState } from "react";
import AddUser from "./AddUser";
import useFirestore from "./useFirestore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./Profile";
import { auth } from "./firebaseConfig";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const { data, isPending, error } = useFirestore("learners");
  const [Admin, setAdmin] = useState(null);
  const [isAdmin, setisAdmin] = useState(false);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setAdmin(user);
      setisAdmin(true);
    } else {
      setAdmin(null);
      setisAdmin(false);
    }
  });
  useEffect(() => {
    console.log("State Change");
    return () => {
      null;
    };
  }, [data, Admin]);

  return (
    <Router>
      <div className="App">
        <Navbar isAdmin={isAdmin} />
        <div className="content">
          <Switch>
            <Route exact path="/">
              {isPending && <h1 className="text-2xl">Loading...</h1>}
              {error && <h1 className="text-2xl">error</h1>}
              {data && (
                <Home
                  title="Learners List: "
                  learnerList={data}
                  isAdmin={isAdmin}
                />
              )}
            </Route>
            {data && (
              <Route path="/addnew">
                <AddUser />
              </Route>
            )}
            <Route path="/profile/:routeID">
              {data && <Profile details={data} />}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
