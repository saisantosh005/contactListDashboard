import { Component } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  SearchAndButtonContainer,
  SearchContainer,
  Input,
  Button,
  ContactsTableMainContainer
} from "./styledComponents";

class ContactsListTable extends Component {
  renderSearchAndAddContacts = () => {
    return (
      <SearchAndButtonContainer>
        <SearchContainer>
          <Input type="text" />
          <AiOutlineSearch />
        </SearchContainer>
        <Button>+ Add Contact</Button>
      </SearchAndButtonContainer>
    );
  };
  render() {
    return (
      <ContactsTableMainContainer>
        {this.renderSearchAndAddContacts()}
      </ContactsTableMainContainer>
    );
  }
}

export default ContactsListTable;
