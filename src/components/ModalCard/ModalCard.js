import { Component } from "react";

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
      id: "",
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
    const { id, name, email, phone, company, address } = details;
    this.setState({
      id,
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

  componentDidUpdate(prevProps) {
    if (this.props.details !== prevProps.details) {
      this.initializeModal(this.props.details);
    }
  }

  onSaveDetails = (event) => {
    const { id, name, phone, email, address, company } = this.state;
    const { updateContactList, handleCloseModal } = this.props;
    const newObject = {
      id,
      name,
      phone,
      email,
      address,
      company
    };

    updateContactList(newObject);
    this.setState(
      {
        id: "",
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
    // console.log(this.props.details, "H");
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
