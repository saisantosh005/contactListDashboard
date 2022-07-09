import { Component } from "react";

import Modal from "react-modal";

import {
  ModalMainContainer,
  ModalContainer,
  Input,
  Button,
  LabelAndInputContainer,
  Label,
  ButtonContainer
} from "./styledComponents";

class ModalCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      company: "",
      address: ""
    };
  }

  componentDidMount() {
    const { details } = this.props;
    if (details) {
      this.initializeModal();
    }
  }

  initializeModal = () => {
    const { details } = this.props;
    console.log(details, "San");
    const { name, email, phone, company, address } = details;
    this.setState({
      name,
      email,
      phone,
      company,
      address
    });
  };

  onChangeName = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  onChangePhone = (event) => {
    this.setState({
      phone: event.target.value
    });
  };
  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value
    });
  };
  onChangeCompany = (event) => {
    this.setState({
      company: event.target.value
    });
  };
  onChangeAddress = (event) => {
    this.setState({
      address: event.target.value
    });
  };

  onSaveDetails = (event) => {
    const { name, phone, email, address, company } = this.state;
    const { updateContactList, handleCloseModal } = this.props;
    const newObject = {
      id: 123,
      name,
      phone,
      email,
      address,
      company
    };
    updateContactList(newObject);
    this.setState(
      {
        name: "",
        phone: "",
        email: "",
        address: "",
        company: ""
      },
      handleCloseModal
    );
  };

  render() {
    const { handleCloseModal, showModal } = this.props;
    console.log("called");
    const { name, phone, email, address, company } = this.state;
    console.log(name, phone, email, address, company);
    return (
      <ModalMainContainer
        isOpen={showModal}
        contentLabel="Minimal Modal Example"
        style={{
          overlay: {
            backgroundColor: "papayawhip",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          content: {
            color: "lightsteelblue",
            padding: "10px",
            overflow: "auto"
          }
        }}
        // style={customStyles}
      >
        <ModalContainer>
          <LabelAndInputContainer>
            <Label>Name</Label>
            <Input
              type="text"
              onChange={this.onChangeName}
              placeholder="Name"
              value={name}
            />
          </LabelAndInputContainer>

          <LabelAndInputContainer>
            <Label>Email</Label>
            <Input
              type="email"
              onChange={this.onChangeEmail}
              placeholder="Email"
              value={email}
            />
          </LabelAndInputContainer>

          <LabelAndInputContainer>
            <Label>Phone</Label>
            <Input
              type="phone"
              onChange={this.onChangePhone}
              placeholder="Phone"
              value={phone}
            />
          </LabelAndInputContainer>

          <LabelAndInputContainer>
            <Label>Company</Label>
            <Input
              type="text"
              onChange={this.onChangeCompany}
              placeholder="Company"
              value={company}
            />
          </LabelAndInputContainer>
          <LabelAndInputContainer>
            <Label>Address</Label>
            <Input
              type="text"
              onChange={this.onChangeAddress}
              placeholder="Address"
              value={address}
            />
          </LabelAndInputContainer>
          <ButtonContainer>
            <Button onClick={this.onSaveDetails}>Save</Button>
            <Button onClick={handleCloseModal}>Close</Button>
          </ButtonContainer>
        </ModalContainer>
      </ModalMainContainer>
    );
  }
}
export default ModalCard;
