import { Component } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import ContactDetailsCard from "../ContactDetailsCard/ContactDetailsCard";
// import App from "../../App";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Modal from "react-modal";
import { FiEdit2 } from "react-icons/fi";
import { BsChatSquareQuote } from "react-icons/bs";

import {
  SearchAndButtonContainer,
  SearchContainer,
  SearchInput,
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
  TabelAndChatOrDetailsContainer,
  LabelAndInputContainer,
  Label,
  ButtonContainer
  // ButtonContainer
} from "./styledComponents";
import ChatBoard from "../ChatBoard/ChatBoard";
// Modal.setAppElement(App);

const data = [
  {
    userId: 124,
    contactList: [
      {
        id: 1,
        name: "pop",
        email: "pop@gmail.com",
        phone: 12345,
        company: "popGroup",
        address: "39493, Hyd"
      },
      {
        id: 2,
        name: "pop1",
        email: "pop1@gmail.com",
        phone: 123456,
        company: "pop1Group",
        address: "3949324, Hyd"
      },
      {
        id: 3,
        name: "pop2",
        email: "pop2@gmail.com",
        phone: 1234567,
        company: "pop1Group",
        address: "394932342, Hyd"
      },
      {
        id: 4,
        name: "pop3",
        email: "pop3@gmail.com",
        phone: 12345678,
        company: "pop3Groupn",
        address: "39493, Hyde"
      },
      {
        id: 5,
        name: "pop4",
        email: "pop4@gmail.com",
        phone: 123456789,
        company: "pop4GroupI",
        address: "39493, Hyd"
      }
    ]
  },
  {
    userId: 125,
    contactList: [
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
        name: "bob1",
        email: "bob1@gmail.com",
        phone: 2098345,
        company: "bob1Group",
        address: "39493, Hyd"
      },
      {
        id: 3,
        name: "bob2",
        email: "bob2@gmail.com",
        phone: 2098345,
        company: "bob2Group",
        address: "39493, Hyd"
      },
      {
        id: 4,
        name: "bob3",
        email: "bob3@gmail.com",
        phone: 2098345,
        company: "bob3Groupn",
        address: "39493, Hyd"
      },
      {
        id: 5,
        name: "bob4",
        email: "bob4@gmail.com",
        phone: 2098345324,
        company: "bob4GroupI",
        address: "39493, Hyd"
      }
    ]
  },
  {
    userId: 126,
    contactList: [
      {
        id: 1,
        name: "jhon",
        email: "jhon@gmail.com",
        phone: 2098345,
        company: "jhonGroup",
        address: "39493, Hyd"
      },
      {
        id: 2,
        name: "jhon1",
        email: "jhon1@gmail.com",
        phone: 2098345,
        company: "jhon1Group",
        address: "39493, Hyd"
      },
      {
        id: 3,
        name: "jhon2",
        email: "jhon2@gmail.com",
        phone: 2098345,
        company: "jhon2Group",
        address: "39493, Hyd"
      },
      {
        id: 4,
        name: "jhon3",
        email: "jhon3@gmail.com",
        phone: 2098345,
        company: "jhon3Groupn",
        address: "39493, Hyd"
      },
      {
        id: 5,
        name: "jhon4",
        email: "jhon4@gmail.com",
        phone: 2098345324,
        company: "jhon4GroupI",
        address: "39493, Hyd"
      }
    ]
  },
  {
    userId: 127,
    contactList: [
      {
        id: 1,
        name: "cran",
        email: "cran@gmail.com",
        phone: 2098345,
        company: "cranGroup",
        address: "39493, Hyd"
      },
      {
        id: 2,
        name: "cran1",
        email: "cran1@gmail.com",
        phone: 2098345,
        company: "cran1Group",
        address: "39493, Hyd"
      },
      {
        id: 3,
        name: "cran2",
        email: "cran2@gmail.com",
        phone: 2098345,
        company: "cran2Group",
        address: "39493, Hyd"
      },
      {
        id: 4,
        name: "cran3",
        email: "cran3@gmail.com",
        phone: 2098345,
        company: "cran3Groupn",
        address: "39493, Hyd"
      },
      {
        id: 5,
        name: "cran4",
        email: "cran4@gmail.com",
        phone: 2098345324,
        company: "cran4GroupI",
        address: "39493, Hyd"
      }
    ]
  }
];

class ContactsListTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      selectedDetail: data.filter(
        (item) => item.userId === props.selectedUser
      )[0].contactList[0],
      showModal: false
    };
  }
  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  onClickContact = (data) => {
    this.setState({
      selectedDetail: data
    });
  };

  onChangeName = () => {};

  onChangePhone = () => {};
  onChangeEmail = () => {};
  onChangeCompany = () => {};
  onSaveDetails = () => {};
  onChangeAddress = () => {};

  renderSearchAndAddContacts = () => {
    return (
      <SearchAndButtonContainer>
        <SearchContainer>
          <SearchInput type="text" placeholder="Search Contact" />
          <AiOutlineSearch />
        </SearchContainer>
        <Button onClick={this.handleOpenModal}>+ Add Contact</Button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <LabelAndInputContainer>
            <Label>Name</Label>
            <Input
              type="text"
              onChange={this.onChangeName}
              placeholder="Name"
            />
          </LabelAndInputContainer>

          <LabelAndInputContainer>
            <Label>Email</Label>
            <Input
              type="email"
              onChange={this.onChangeEmail}
              placeholder="Email"
            />
          </LabelAndInputContainer>

          <LabelAndInputContainer>
            <Label>Phone</Label>
            <Input
              type="phone"
              onChange={this.onChangePhone}
              placeholder="Phone"
            />
          </LabelAndInputContainer>

          <LabelAndInputContainer>
            <Label>Company</Label>
            <Input
              type="text"
              onChange={this.onChangeCompany}
              placeholder="Company"
            />
          </LabelAndInputContainer>
          <LabelAndInputContainer>
            <Label>Address</Label>
            <Input
              type="text"
              onChange={this.onChangeAddress}
              placeholder="Address"
            />
          </LabelAndInputContainer>
          <Button onClick={this.onSaveDetails}>Save</Button>
          <Button onClick={this.handleCloseModal}>Close</Button>
        </Modal>
      </SearchAndButtonContainer>
    );
  };

  renderContactListTable = () => {
    const { data } = this.state;
    const { selectedUser } = this.props;
    const listData = data.filter((item) => item.userId === selectedUser);
    const { contactList } = listData[0];
    return contactList.map((item) => {
      var colors = ["#74609e", "#7880de", "#e887b7", "#709e60", "#9e6760"];
      var random_color = colors[Math.floor(Math.random() * colors.length)];
      return (
        <Tr
          onClick={(event) => this.onClickContact(item)}
          id={item.id}
          key={item.id}
        >
          <Td checkBox>
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
          <Td last>{item.company}</Td>
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
          <Tabs>
            <TabList>
              <Tab>
                <FiEdit2 />
              </Tab>
              <Tab>
                <BsChatSquareQuote />
              </Tab>
            </TabList>

            <TabPanel>
              <ContactDetailsCard details={selectedDetail} />
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
              <ChatBoard />
            </TabPanel>
          </Tabs>
        </TabelAndChatOrDetailsContainer>
      </ContactsTableMainContainer>
    );
  }
}

export default ContactsListTable;
