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
  LoadingText,
  TableContainer
  // ButtonContainer
} from "./styledComponents";
import ChatBoard from "../ChatBoard/ChatBoard";
import ModalCard from "../ModalCard/ModalCard";
// Modal.setAppElement(App);
import { dataIn } from "../../MockData/MockData";

class ContactsListTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [],
      selectedDetail: {},
      showModal: false,
      editDetails: {}
    };
  }

  componentDidMount() {
    const { selectedUser } = this.props;
    this.intializeTheValue(selectedUser);
  }

  intializeTheValue = (selectedUser) => {
    this.setState({
      contactList: dataIn.filter((item) => item.userId === selectedUser)[0]
        .contactList,
      selectedDetail: dataIn.filter((item) => item.userId === selectedUser)[0]
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
    const isPreset = contactList.filter((item) => item.id === details.id);
    if (isPreset.length !== 0) {
      const updateList = contactList.map((item) =>
        item.id === details.id ? details : item
      );
      this.setState({
        contactList: updateList
      });
    } else {
      this.setState({
        contactList: [...contactList, details]
      });
    }
  };

  onClickContact = (event, data) => {
    event.stopPropagation();
    this.setState({
      selectedDetail: data
    });
  };

  onOpenModal = () => {
    this.setState({
      editDetails: {
        id: 12434,
        name: "",
        email: "",
        company: "",
        phone: "",
        address: ""
      }
    });
  };
  onEditIconClick = (details) => {
    this.setState({
      editDetails: details
    });
  };
  renderSearchAndAddContacts = () => {
    console.log("ser");
    const { showModal, editDetails } = this.state;
    return (
      <SearchAndButtonContainer>
        <SearchContainer>
          <SearchInput type="text" placeholder="Search Contact" />
          <AiOutlineSearch />
        </SearchContainer>
        <Button
          onClick={() => {
            this.handleOpenModal();
            this.onOpenModal();
          }}
        >
          + Add Contact
        </Button>
        <ModalCard
          showModal={showModal}
          updateContactList={this.updateContactList}
          handleCloseModal={this.handleCloseModal}
          details={editDetails}
        />
      </SearchAndButtonContainer>
    );
  };

  onClickEdit = (event) => {
    event.stopPropagation();
  };

  onSendMessage = (id, chat) => {
    console.log(id, chat);
    const { contactList } = this.state;
    const updatedList = contactList.map((item) => {
      if (item.id === id) {
        item.chat = chat;
        return item;
      }
      return item;
    });
    console.log(updatedList);
    // this.setState({
    //   contactList: updatedList
    // });
  };

  renderContactListTable = () => {
    const { contactList } = this.state;
    return contactList.map((item) => {
      var colors = ["#74609e", "#7880de", "#e887b7", "#709e60", "#9e6760"];
      var random_color = colors[Math.floor(Math.random() * colors.length)];
      return (
        <Tr
          onClick={(event) => this.onClickContact(event, item)}
          id={item.id}
          key={item.id}
        >
          <Td checkBox>
            <IconContainer onClick={this.onClickEdit}>
              <FiEdit2
                onClick={() => {
                  this.handleOpenModal();
                  this.onEditIconClick(item);
                }}
              />
            </IconContainer>
          </Td>
          <Td>
            <InfoContainer>
              <LogoContainer color={colors[0]}>
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
            <TableContainer>
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
            </TableContainer>
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
              <ChatBoard
                id={selectedDetail.id}
                chataData={selectedDetail.chat}
                onSendMessage={this.onSendMessage}
              />
            </TabPanel>
          </TabsContainer>
        </TabelAndChatOrDetailsContainer>
      </ContactsTableMainContainer>
    );
  }
}

export default ContactsListTable;
