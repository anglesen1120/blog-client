import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../HomePage";
import UserDetailsPage from "../UserDetailsPage";
import PostDetailsPage from "../PostDetailsPage";
import GlobalStyle from "../../globalStyles";
import ModalComponent from "../../components/Modal/Modal";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/user/:userId" component={UserDetailsPage} />
        <Route exact path="/user/:userId/:postId" component={PostDetailsPage} />
      </Switch>
      <ModalComponent />
      <GlobalStyle />
    </div>
  </Router>
);

export default App;
