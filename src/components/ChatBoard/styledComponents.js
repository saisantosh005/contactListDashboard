import styled from "styled-components";

const ChatBoardMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;
const ChardBoardChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  padding: 10px;
`;
const LogoAndTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
  align-self: ${(props) => (props.status === "to" ? "flex-start" : "flex-end")};
`;

const LogoContainer = styled.div`
  order: ${(props) => (props.status === "to" ? "0" : "1")};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d6c913;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  padding: 2px;
  margin-right: ${(props) => (props.status === "to" ? "5px" : "0px")};
  margin-left: ${(props) => (props.status === "to" ? "0px" : "5px")};
`;
const Logo = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
  font-family: sans-serif;
  padding: 0px;
  margin: 0px;
`;
const TextBox = styled.p`
  background: #dbdbd0;
  border-radius: 5px;
  font-family: sans-serif;
  padding: 5px 20px 5px 10px;
  margin: 0px;
`;

const InputAndButtonConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ded6d3;
  border-radius: 8px;
  padding: 8px;
  margin-right: 20px;
`;
const Input = styled.input`
  display: flex;
  flex-wrap: wrap;
  font-size: 15px;
  font-family: sans-serif;
  background-color: inherit;
  border: none;
  outline: none;
`;
const Button = styled.button`
  font-size: 14px;
  color: #ffffff;
  background: #ba3627;
  border: none;
  outline: none;
  padding: 4px 8px;
  border-radius: 5px;
`;

export {
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
};
