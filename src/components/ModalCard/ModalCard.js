import { Component } from "react";

import Modal from "react-modal";

import {
  Input,
  Button,
  LabelAndInputContainer,
  Label
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

  onChangeName = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  onChangePhone = (event) => {
    this.setState({
      phone: event.target.phone
    });
  };
  onChangeEmail = (event) => {
    this.setState({
      email: event.target.email
    });
  };
  onChangeCompany = (event) => {
    this.setState({
      company: event.target.company
    });
  };
  onChangeAddress = (event) => {
    this.setState({
      address: event.target.address
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
      <Modal isOpen={showModal} contentLabel="Minimal Modal Example">
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
        <Button onClick={this.onSaveDetails}>Save</Button>
        <Button onClick={handleCloseModal}>Close</Button>
      </Modal>
    );
  }
}
export default ModalCard;
