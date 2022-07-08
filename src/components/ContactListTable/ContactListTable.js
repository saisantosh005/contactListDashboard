import { Component } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import ContactDetailsCard from "../ContactDetailsCard/ContactDetailsCard";
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
  Email,
  TabelAndChatOrDetailsContainer
} from "./styledComponents";
const data = [
  {
    id: 1,
    name: "bob",
    email: "bob@gmail.com",
    phone: 2098345,
    company: "bobGroup",
    address: "39493, Hyd"
  },
  {
    id: 2,
    name: "bob",
    email: "bob@gmail.com",
    phone: 2098345,
    company: "bobGroup",
    address: "39493, Hyd"
  },
  {
    id: 3,
    name: "bob",
    email: "bob@gmail.com",
    phone: 2098345,
    company: "bobGroup",
    address: "39493, Hyd"
  },
  {
    id: 4,
    name: "pop",
    email: "pop@gmail.com",
    phone: 2098345,
    company: "popGroupn",
    address: "39493, Hyd"
  },
  {
    id: 5,
    name: "bobb",
    email: "bobb@gmail.com",
    phone: 2098345324,
    company: "bobGroupI",
    address: "39493, Hyd"
  }
];
class ContactsListTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      selectedDetail: ""
    };
  }

  onClickContact = (data) => {
    this.setState({
      selectedDetail: data
    });
  };

  renderSearchAndAddContacts = () => {
    return (
      <SearchAndButtonContainer>
        <SearchContainer>
          <Input type="text" placeholder="Search Contact" />
          <AiOutlineSearch />
        </SearchContainer>
        <Button>+ Add Contact</Button>
      </SearchAndButtonContainer>
    );
  };

  renderContactListTable = () => {
    const { data } = this.state;

    return data.map((item) => {
      var colors = ["#74609e", "#7880de", "#e887b7", "#709e60", "#9e6760"];
      var random_color = colors[Math.floor(Math.random() * colors.length)];
      return (
        <Tr onClick={() => this.onClickContact(item)} id={item.id}>
          <Td>
            <Input type="checkbox" />
          </Td>
          <Td>
            <InfoContainer>
              <LogoContainer color={random_color}>
                <LogoName>{item.name.slice(0, 2)}</LogoName>
              </LogoContainer>
              <NameEmailContainer>
                <Name>{item.name}</Name>
                <Email>{item.email}</Email>
              </NameEmailContainer>
            </InfoContainer>
          </Td>
          <Td>{item.company}</Td>
        </Tr>
      );
    });
  };

  render() {
    const { selectedDetail } = this.state;

    return (
      <ContactsTableMainContainer>
        {this.renderSearchAndAddContacts()}
        <TabelAndChatOrDetailsContainer>
          <Table>
            <TableHeader>
              <Tr>
                <Th>+</Th>
                <Th>Basic Info</Th>
                <Th>Company</Th>
              </Tr>
            </TableHeader>
            <tbody>
              <TableBody>{this.renderContactListTable()}</TableBody>
            </tbody>
          </Table>
          <ContactDetailsCard details={selectedDetail} />
        </TabelAndChatOrDetailsContainer>
      </ContactsTableMainContainer>
    );
  }
}

export default ContactsListTable;
