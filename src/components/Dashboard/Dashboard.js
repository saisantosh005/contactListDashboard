import { Component } from "react";
import ContactDetailsCard from "../ContactDetailsCard/ContactDetailsCard";
import ContactsListTable from "../ContactListTable/ContactListTable";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import WelcomeCard from "../WelcomeCard/WelcomeCard";
import {
  DashBoaderMainContainer,
  DashBoardHeaderAndDetailsContainer
} from "./styledComponents";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  render() {
    return (
      <DashBoaderMainContainer>
        <NavBar />
        <DashBoardHeaderAndDetailsContainer>
          <Header />
          <WelcomeCard />
          <ContactsListTable />
        </DashBoardHeaderAndDetailsContainer>
      </DashBoaderMainContainer>
    );
  }
}

export default Dashboard;
