import React from "react";
import HrMenu from "./menu";
import "../../resources/global.css";
import "../HR/hr.css";
import AddEmployee from "./add employee";
import ViewEmployee from "./view employee";

class HR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      compName: "",
      user: {},
    };
  }

  compLoaderHandler = (compName) => {
    console.log("loader handler called: " + compName);
    this.setState({ compName: compName });
  };

  compLoader = () => {
    if (this.state.compName === "dashboard") {
      return <div>dashboard</div>;
    } else if (this.state.compName === "addEmployee") {
      return <AddEmployee user={this.state.user} />;
    } else if (this.state.compName === "viewEmployee") {
      return <ViewEmployee />;
    } else {
      return <div>dashboard</div>;
    }
  };

  render() {
    return (
      <section className="hr-section">
        <HrMenu menuHandler={this.compLoaderHandler} />
        {this.compLoader()}
      </section>
    );
  }
}

export default HR;
