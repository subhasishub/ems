import React from "react";
import "../../resources/global.css";
import "../HR/hr.css";
import getAuthHeaders from "../../services/auth-header";
import API from "../../util/API_URI";
import LeftMenu from "./leftmenu";
import BasicDetails from "./basic_details";
import EducationDetails from "./education_details";

class AddEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      compName: "",
      user: {},
    };
  }

  isFormValid = () => {
    return true;
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
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.props.user);
    let requestOptions = this.getMethodAndHeader();
    requestOptions.body = JSON.stringify(this.props.user);
    fetch(API.ADD_EMPLOYEE, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  handleOnChange = (event) => {
    this.props.user[event.target.name] = event.target.value;
  };

  testOnClick = (event) => {
    console.log("populating");
    console.log(this.state.user);
  };

  formSectionLoader = () => {
    if (this.state.compName === "basicDetails") {
      console.log("basic detals called");
      return <BasicDetails user={this.state.user}></BasicDetails>;
    } else if (this.state.compName === "educationDetails") {
      return <EducationDetails user={this.state.user}></EducationDetails>;
    }
  };

  formSectionLoaderHandler = (compName) => {
    console.log("loader handler called:qweqeq " + compName);
    this.setState({ compName: compName });
  };

  render() {
    return (
      <section className="flex-row flex-grow-1" id="addEmpFormSec">
        <LeftMenu
          listener={this.formSectionLoaderHandler}
          compName={this.state.compName}
        />
        <div class="right-container flex-grow-1">
          <div class="flex-justify-center-col">
            <p className="sec-heading text-center">Add employee form</p>
            <div className="progress-bar">
              <div class="show-progress">25% completed</div>
            </div>
          </div>
          <button onClick={(e) => this.testOnClick(e)}>Test me</button>
          {this.formSectionLoader()}
        </div>
      </section>
    );
  }
}

export default AddEmployee;
