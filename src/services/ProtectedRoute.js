import React from "react";
import getAuthHeaders from "./auth-header";
import { Redirect } from "react-router-dom";
import NavBar from "../components/Navbar/navbar";

class ProtectedRoute extends React.Component {
  constructor(props) {
    super(props);
  }

  isAuthenticated = () => {
    if (getAuthHeaders()) return true;
  };

  render() {
    const Component = this.props.component;

    return this.isAuthenticated() ? (
      <React.Fragment>
        <NavBar />
        <Component />
      </React.Fragment>
    ) : (
      <Redirect to={{ pathname: "/login" }} />
    );
  }
}

export default ProtectedRoute;
