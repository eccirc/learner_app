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
    return () => {
      null;
    };
  }, [Admin, data]);

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
                  title="Learners List: Average Score = "
                  learnerList={data}
                  isAdmin={isAdmin}
                />
              )}
            </Route>
            {data && (
              <Route path="/addnew">
                <AddUser listLength={data.length} />
              </Route>
            )}
            <Route path="/profile/:name">
              {data && <Profile details={data} />}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
