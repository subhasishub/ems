import React from "react";
import "../../resources/global.css";
import "../HR/hr.css";
import getAuthHeaders from "../../services/auth-header";
import API from "../../util/API_URI";

class BasicDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  validation = function () {
    return {
      isPassed: true,
    };
  };

  getMethodAndHeader = () => {
    let requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        myauthorization: getAuthHeaders(),
        "Access-Control-Request-Method": "POST",
      },
    };
    return requestOptions;
  };
  messageBox = () => {
    console.log("in message box");
  };

  highlightErrors = (violations) => {
    violations.map((e) => console.log(e));
  };

  handleSubmit = (event) => {
    console.log(this.props.user);
    let requestOptions = this.getMethodAndHeader();
    requestOptions.body = JSON.stringify(this.props.user);
    fetch(API.ADD_EMPLOYEE + "/basic", requestOptions)
      .then((response) => {
        console.log(response.status);
        if (response.status == 204 || response.status == 201) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((json) => {
        // call message box
        this.messageBox();
      })
      .catch((error) => {
        error.json().then((error) => this.highlightErrors(error.violations));
      });
  };

  handleOnChange = (event) => {
    this.props.user[event.target.name] = event.target.value;
  };

  saveHandler = (event) => {
    console.log("save handler");
    console.log(this.props);
    if (this.validation().isPassed) {
      this.handleSubmit(event);
    }
  };

  render() {
    return (
      <form className="flex-center-col wd100  rel">
        <div className="flex-col form-section">
          <p className="text-center sub-heading">Basic Details</p>
          <label htmlFor="firstname" className="form-label">
            First name:
          </label>
          <input
            type="text"
            name="firstname"
            value={this.props.user.firstname}
            onChange={(e) => this.handleOnChange(e)}
          />

          <label htmlFor="middlename" className="form-label">
            Middle name:
          </label>
          <input
            type="text"
            name="middlename"
            value={this.props.user.middlename}
            onChange={(e) => this.handleOnChange(e)}
          />

          <label htmlFor="lastname" className="form-label">
            Last name:
          </label>
          <input
            type="text"
            name="lastname"
            value={this.props.user.lastname}
            onChange={(e) => this.handleOnChange(e)}
          />
          <label htmlFor="emcontactname" className="form-label">
            Emergency contact name:
          </label>
          <input
            type="text"
            name="emcontactname"
            value={this.props.user.emcontactname}
            onChange={(e) => this.handleOnChange(e)}
          />
          <label htmlFor="emcontactnum" className="form-label">
            Emergency contact number:
          </label>
          <input
            type="text"
            name="emcontactnum"
            value={this.props.user.emcontactnum}
            onChange={(e) => this.handleOnChange(e)}
          />
        </div>
        <div className="wd40">
          <input
            onClick={(e) => this.saveHandler(e)}
            type="button"
            className="btn-action"
            value="Save and Proceed"
          />
        </div>
      </form>
    );
  }
}

export default BasicDetails;
