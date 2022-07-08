import { Component } from "react";
import ContactDetailsCard from "../ContactDetailsCard/ContactDetailsCard";
import ContactsListTable from "../ContactListTable/ContactListTable";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import WelcomeCard from "../WelcomeCard/WelcomeCard";
import {
  DashBoaderMainContainer,
  DashBoardHeaderAndDetailsContainer,
  WelcomeCardAndTableContainer
} from "./styledComponents";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      users: [
        { name: "Pop", id: 124 },
        { name: "Bob", id: 125 },
        { name: "san", id: 126 },
        { name: "Anv", id: 127 }
      ],
      selectedUser: 124
    };
  }
  onChangeSelect = (event) => {
    const value = parseInt(event.target.value);
    this.setState({
      selectedUser: value
    });
  };

  render() {
    const { users, selectedUser } = this.state;
    return (
      <DashBoaderMainContainer>
        <NavBar />
        <DashBoardHeaderAndDetailsContainer>
          <Header users={users} onChangeSelect={this.onChangeSelect} />
          <WelcomeCardAndTableContainer>
            <WelcomeCard />
            <ContactsListTable selectedUser={selectedUser} />
          </WelcomeCardAndTableContainer>
        </DashBoardHeaderAndDetailsContainer>
      </DashBoaderMainContainer>
    );
  }
}

export default Dashboard;
