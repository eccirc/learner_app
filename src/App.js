import Navbar from "./Navbar";
import Home from "./Home";
//import { useState } from "react";
import AddUser from "./AddUser";
import useFirestore from "./useFirestore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./Profile";

function App() {
  const { data, isPending, error } = useFirestore("learners");

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              {isPending && <h1 className="text-2xl">Loading...</h1>}
              {error && <h1 className="text-2xl">error</h1>}
              {data && (
                <Home
                  title="Learners List: Average Score = "
                  learnerList={data}
                />
              )}
            </Route>
            <Route path="/addnew">
              <AddUser />
            </Route>
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
