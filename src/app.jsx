import React from "react";
// import styles from "./app.scss";
// import myImage from "./assets/img/brand/argon-react.png";
import { Router, Route, Switch, Redirect } from "react-router-dom";
// React-Redux
import { Provider } from "react-redux";
import configureStore from "./redux/Store";

import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";

import AdminLayout from "./layouts/Admin.js";
import AuthLayout from "./layouts/Auth";
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();

function App() {
  const storeObject = configureStore();
  const { store } = storeObject;
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
          <Redirect from="/" to="/auth/login" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
