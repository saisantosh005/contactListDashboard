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

const customStyles = {
  content: {
    top: "100%",
    left: "100%",
    right: "",
    bottom: "auto"
    // marginRight: "-50%",
    // transform: "translate(-50%, -50%)"
  }
};

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

    const { name, phone, email, address, company } = this.state;
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
