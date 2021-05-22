import React from "react";
import "./login.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  user = {};
  handleChange = (event) => {
    this.user[event.target.name] = event.target.value;
  };

  loginSubmitHandler = (event) => {
    this.props.onLogin(this.user);
  };

  render() {
    return (
      <section className="full-wh container">
        <div className="login-container">
          <div className="tool-info">
            {/* <span>Tedroox</span>
            <span>TedCafe</span> */}
          </div>
          <div className="login-form-container">
            <div class="login-wrapper wd40">
              <p className="enter_cred">Enter your login credentials:</p>
              <input
                type="text"
                className="input-control wd100"
                placeholder="enter username"
                name="username"
                onChange={(e) => this.handleChange(e)}
              />
              <br></br>

              <input
                type="password"
                className="input-control wd100"
                placeholder="enter password"
                name="password"
                onChange={(e) => this.handleChange(e)}
              />
              <br></br>
              <input
                type="button"
                //onClick={() => this.props.onLogin(this.user)}
                onClick={(e) => this.loginSubmitHandler(e)}
                className="btn-action"
                value="submit"
              />
            </div>
            <span class="info">
              Please contact helpdesk@tedroox.com, for any issues
            </span>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

const mapDispatchToActions = (dispatch) => {
  return {
    onLogin: (user) => {
      dispatch({
        type: "LOGIN",
        value: user,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToActions)(Login);
