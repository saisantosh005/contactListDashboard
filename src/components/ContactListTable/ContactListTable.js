import { Component } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  SearchAndButtonContainer,
  SearchContainer,
  Input,
  Button,
  ContactsTableMainContainer,
  Table,
  TableHeader,
  Th,
  TableBody,
  Td,
  Tr,
  InfoContainer,
  LogoContainer,
  LogoName,
  NameEmailContainer,
  Name,
  Email
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

  renderContactListTable = () => {
    return (
      <Tr>
        <Td>
          <Input type="checkbox" />
        </Td>
        <Td>
          <InfoContainer>
            <LogoContainer>
              <LogoName>{"Santosh".slice(0, 2)}</LogoName>
            </LogoContainer>
            <NameEmailContainer>
              <Name>Santosh</Name>
              <Email>s@gmail.com</Email>
            </NameEmailContainer>
          </InfoContainer>
        </Td>
        <Td>Hello</Td>
      </Tr>
    );
  };

  render() {
    return (
      <ContactsTableMainContainer>
        {this.renderSearchAndAddContacts()}
        <Table>
          <TableHeader>
            <Tr>
              <Th>+</Th>
              <Th>Basic Info</Th>
              <Th>Company</Th>
            </Tr>
          </TableHeader>
          <TableBody>{this.renderContactListTable()}</TableBody>
        </Table>
      </ContactsTableMainContainer>
    );
  }
}

export default ContactsListTable;
