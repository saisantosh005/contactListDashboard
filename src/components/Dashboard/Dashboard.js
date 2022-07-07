import { Component } from "react";
import Header from "../Header/Header";
import { DashBoaderMainContainer } from "./styledComponents";

class Dashboard extends Component {
  render() {
    return (
      <DashBoaderMainContainer>
        <Header />
      </DashBoaderMainContainer>
    );
  }
}

export default Dashboard;
