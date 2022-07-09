import { Component } from "react";
// import App from "../../App";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChatSquareQuote } from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";

import { Tab, TabList, TabPanel } from "react-tabs";
import ContactDetailsCard from "../ContactDetailsCard/ContactDetailsCard";
import "react-tabs/style/react-tabs.css";

import {
  SearchAndButtonContainer,
  SearchContainer,
  SearchInput,
  IconContainer,
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
  TabsContainer,
  LoadingContainer,
  LoadingText
  // ButtonContainer
} from "./styledComponents";
import ChatBoard from "../ChatBoard/ChatBoard";
import ModalCard from "../ModalCard/ModalCard";
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
      contactList: [],
      selectedDetail: {},
      showModal: false
    };
  }

  componentDidMount() {
    const { selectedUser } = this.props;
    this.intializeTheValue(selectedUser);
  }

  intializeTheValue = (selectedUser) => {
    this.setState({
      contactList: data.filter((item) => item.userId === selectedUser)[0]
        .contactList,
      selectedDetail: data.filter((item) => item.userId === selectedUser)[0]
        .contactList[0]
    });
  };
  componentDidUpdate(prevProps) {
    if (this.props.selectedUser !== prevProps.selectedUser) {
      this.intializeTheValue(this.props.selectedUser);
    }
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  updateContactList = (details) => {
    const { contactList } = this.state;
    this.setState({
      contactList: [...contactList, details]
    });
  };

  onClickContact = (data) => {
    this.setState({
      selectedDetail: data
    });
  };

  renderSearchAndAddContacts = () => {
    const { showModal } = this.state;
    return (
      <SearchAndButtonContainer>
        <SearchContainer>
          <SearchInput type="text" placeholder="Search Contact" />
          <AiOutlineSearch />
        </SearchContainer>
        <Button onClick={this.handleOpenModal}>+ Add Contact</Button>
        <ModalCard
          showModal={showModal}
          updateContactList={this.updateContactList}
          handleCloseModal={this.handleCloseModal}
        />
      </SearchAndButtonContainer>
    );
  };

  onClickEdit = (event) => {
    event.stopPropagation();
  };

  renderContactListTable = () => {
    const { contactList } = this.state;
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
            <IconContainer onClick={this.onClickEdit}>
              <FiEdit2 onClick={this.handleOpenModal} />
              <ModalCard details={item} />
            </IconContainer>
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
    const { selectedDetail, contactList } = this.state;
    return (
      <ContactsTableMainContainer>
        {this.renderSearchAndAddContacts()}
        <TabelAndChatOrDetailsContainer>
          {contactList.length !== 0 ? (
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
          ) : (
            <LoadingContainer>
              <LoadingText>Loading</LoadingText>
            </LoadingContainer>
          )}
          <TabsContainer>
            <TabList>
              <Tab>
                <CgDetailsMore />
              </Tab>
              <Tab>
                <BsChatSquareQuote />
              </Tab>
            </TabList>

            <TabPanel>
              {contactList.length !== 0 ? (
                <ContactDetailsCard details={selectedDetail} />
              ) : (
                <LoadingText>Loading...</LoadingText>
              )}
            </TabPanel>
            <TabPanel>
              <ChatBoard />
            </TabPanel>
          </TabsContainer>
        </TabelAndChatOrDetailsContainer>
      </ContactsTableMainContainer>
    );
  }
}

export default ContactsListTable;
