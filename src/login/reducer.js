import React from "react";

import getAuthHeaders from "../services/auth-header";

const initialState = {
  isLoggedIn: false,
};

const loggedInUser = {
  isLoggedIn: false,
  userObject: "",
};

const LoginReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "LOGGED_IN_ASYNC":

      action.value.json().then((jwt) => {
        localStorage.setItem("token", jwt.token);
        console.log(jwt);
      });

      // if (getAuthHeaders()) {
      //   newState.isLoggedIn = true;
      //   loggedInUser.isLoggedIn = true;
      //   loggedInUser.userObject = action.user;
      // }
  }
  return newState;
};

export default LoginReducer;
