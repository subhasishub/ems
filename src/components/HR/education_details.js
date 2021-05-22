import React from "react";
import "../../resources/global.css";
import "../HR/hr.css";
import getAuthHeaders from "../../services/auth-header";
import API from "../../util/API_URI";

class EducationDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  handleOnChange = (event) => {
    event.persist();
    console.log(event.target.value);
    this.props.user[event.target.name] = event.target.value;
    console.log(this.props.user);
  };

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

  handleSubmit = (event) => {
    console.log(this.props.user);
    let requestOptions = this.getMethodAndHeader();
    requestOptions.body = JSON.stringify(this.props.user);
    fetch(API.ADD_EMPLOYEE + "/education", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  saveHandler = (event) => {
    console.log("education details save handler");
    console.log(this.props);
    if (this.validation().isPassed) {
      this.handleSubmit(event);
    }
  };

  render() {
    return (
      <form className="flex-center-col wd100  rel">
        <div className="flex-col form-section">
          <p className="text-center sub-heading">Education Details</p>
          <label className="form-label">Highest qualification:</label>
          <select
            value={this.props.user.hQualification}
            name="hQualification"
            onChange={(e) => this.handleOnChange(e)}
          >
            <option value="PHD">PHD</option>
            <option value="Masters">Masters</option>
            <option value="Bachelors">Bachelors</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Matriculation">Matriculation</option>
          </select>

          <label htmlFor="hQualificationMarks" className="form-label">
            Highest qualification percentage:
          </label>
          <input
            type="number"
            name="hQualificationMarks"
            value={this.props.user.hQualificationMarks}
            onChange={(e) => this.handleOnChange(e)}
          />

          <label htmlFor="hQualificationStDate" className="form-label">
            Start date:
          </label>
          <input
            type="date"
            name="hQualificationStDate"
            value={this.props.user.hQualificationStDate}
            onChange={(e) => this.handleOnChange(e)}
          />

          <label htmlFor="hQualificationEndDate" className="form-label">
            End date:
          </label>
          <input
            type="date"
            name="hQualificationEndDate"
            value={this.props.user.hQualificationEndDate}
            onChange={(e) => this.handleOnChange(e)}
          />
        </div>
        <div className="wd40">
          <input
            type="button"
            onClick={(e) => this.saveHandler(e)}
            className="btn-action"
            value="Save and Proceed"
          />
        </div>
      </form>
    );
  }
}

export default EducationDetails;
