import { Component } from "react";

import {
  ChatBoardMainContainer,
  ChardBoardChatContainer,
  LogoAndTextContainer,
  LogoContainer,
  Logo,
  TextBox,
  InputAndButtonConatiner,
  InputContainer,
  Input,
  Button
} from "./styledComponents";

const data = [
  { status: "to", id: 1, message: "Hello" },
  { status: "to", id: 1, message: "Hello" },
  { status: "from", id: 1, message: "Hello" },
  { status: "to", id: 1, message: "Hello" },
  { status: "from", id: 1, message: "Hello" }
];

class ChatBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      chatInput: ""
    };
  }
  onChangeInput = (event) => {
    this.setState({
      chatInput: event.target.value
    });
  };

  onClickSend = (event) => {
    const { chatInput, data } = this.state;
    const objectValue = {
      status: "from",
      id: 12,
      message: chatInput
    };
    this.setState({
      chatInput: "",
      data: [...data, objectValue]
    });
  };

  renderChatData = () => {
    const { data } = this.state;
    return data.map((item) => {
      return (
        <LogoAndTextContainer status={item.status}>
          <LogoContainer status={item.status}>
            <Logo>pa</Logo>
          </LogoContainer>
          <TextBox>{item.message}</TextBox>
        </LogoAndTextContainer>
      );
    });
  };
  render() {
    const { chatInput } = this.state;
    return (
      <ChatBoardMainContainer>
        <ChardBoardChatContainer>
          {this.renderChatData()}
        </ChardBoardChatContainer>

        <InputAndButtonConatiner>
          <InputContainer>
            <Input
              type="text"
              onChange={this.onChangeInput}
              placeholder="message"
              value={chatInput}
            />
          </InputContainer>
          <Button onClick={this.onClickSend}>Send</Button>
        </InputAndButtonConatiner>
      </ChatBoardMainContainer>
    );
  }
}
export default ChatBoard;
