import React from "react";
import SignupUi from "./Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginUi from "./Login";
import "antd/dist/antd.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignupUi} />

        <Route path="/loginUi" component={LoginUi} />
      </Switch>
    </Router>
  );
}

export default App;
