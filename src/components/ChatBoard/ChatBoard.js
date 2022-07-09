import { Component } from "react";
import uuid from "react-uuid";

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
  { status: "to", id: 1, message: "Hella" },
  { status: "to", id: 1, message: "Hello" },
  { status: "from", id: 1, message: "Hello" },
  { status: "to", id: 1, message: "Hello" },
  { status: "from", id: 1, message: "Hello" }
];

class ChatBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      data: {},
      chatInput: ""
    };
  }
  componentDidMount() {
    this.initialize();
  }

  componentDidUpdate(prevProps) {
    if (this.props.chataData !== prevProps.chataData) {
      this.initialize(this.props.chataData);
    }
  }

  initialize = () => {
    const { chataData, id } = this.props;
    this.setState({
      id: id,
      data: chataData
    });
  };

  onChangeInput = (event) => {
    this.setState({
      chatInput: event.target.value
    });
  };

  onClickSend = (event) => {
    const { chatInput, data, id } = this.state;
    const { onSendMessage } = this.props;
    const objectValue = {
      status: "to",
      id: uuid(),
      message: chatInput
    };
    this.setState(
      {
        chatInput: "",
        data: [...data, objectValue]
      },
      () => {
        const { data } = this.state;
        onSendMessage(id, data);
      }
    );
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
    const { chatInput, data } = this.state;

    return (
      <ChatBoardMainContainer>
        <ChardBoardChatContainer>
          {data.length > 0 ? this.renderChatData() : <p>Loading</p>}
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
