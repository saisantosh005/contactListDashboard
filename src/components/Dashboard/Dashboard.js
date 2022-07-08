import { Component } from "react";
import ContactDetailsCard from "../ContactDetailsCard/ContactDetailsCard";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import {
  DashBoaderMainContainer,
  DashBoardHeaderAndDetailsContainer
} from "./styledComponents";

class Dashboard extends Component {
  render() {
    return (
      <DashBoaderMainContainer>
        <NavBar />
        <DashBoardHeaderAndDetailsContainer>
          <Header />
          <ContactDetailsCard />
        </DashBoardHeaderAndDetailsContainer>
      </DashBoaderMainContainer>
    );
  }
}

export default Dashboard;
