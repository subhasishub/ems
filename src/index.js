import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import LoginReducer from "./login/reducer";
import LoginSaga from "./login/sagas";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./login/login_component";
import Dashboard from "./components/dashboard/Dashboard";
import ProtectedRoute from "./services/ProtectedRoute";
import HR from "./components/HR/hr";
import { createBrowserHistory } from "history";

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(LoginReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(LoginSaga);

const history = createBrowserHistory();

let root = document.getElementById("root");
if (root) {
  var location = Location;
  // 1. Set up the browser history with the updated location
  // (minus the # sign)
  const path = (/#!(\/.*)$/.exec(location.hash) || [])[1];
  if (path) {
    history.replace(path);
  }
}

// 2. Render our app
//render(<App />, app);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact={true} path="/dashboard" component={Dashboard} />
        <ProtectedRoute exact={true} path="/hr" component={HR} />
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
