import { Component } from "react";
import ContactDetailsCard from "../ContactDetailsCard/ContactDetailsCard";
import Header from "../Header/Header";
import { DashBoaderMainContainer } from "./styledComponents";

class Dashboard extends Component {
  render() {
    return (
      <DashBoaderMainContainer>
        <Header />
        <ContactDetailsCard />
      </DashBoaderMainContainer>
    );
  }
}

export default Dashboard;
