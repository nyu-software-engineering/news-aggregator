import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from './pages/HomePage';
import MyNewsPage from './pages/MyNewsPage';
import SavedForLaterPage from './pages/SavedForLaterPage';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/mynews" component={MyNewsPage} />
        <Route exact path="/savedforlater" component={SavedForLaterPage} />

       
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
