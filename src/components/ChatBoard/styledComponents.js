import styled from "styled-components";

const ChatBoardMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  border-radius: 15px;
  padding: 6px;
  margin: 8px;
  @media screen and (min-width: 568px) {
    max-width: 350px;
    padding: 10px;
    margin: 10px;
  }
`;
const ChardBoardChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #edede6;
  align-items: flex-start;
  align-self: stretch;
  flex-grow: 1;
  overflow: auto;
  max-height: 200px;
  border-radius: 15px;
  padding: 10px;
  @media screen and (min-width: 568px) {
    max-width: 400px;
  }
`;
const LogoAndTextContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: ${(props) => (props.status !== "to" ? "flex-start" : "flex-end")};
  margin: 5px;
`;

const LogoContainer = styled.div`
  order: ${(props) => (props.status === "to" ? "1" : "")};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d6c913;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 2px;
  margin-left: ${(props) => (props.status === "to" ? "5px" : "0px")};
  margin-right: ${(props) => (props.status === "to" ? "0px" : "5px")};
  @media screen and (min-width: 568px) {
    width: 22px;
    height: 22px;
    padding: 5px;
  }
`;
const Logo = styled.p`
  color: #ffffff;
  font-size: 12px;
  font-weight: 400;
  font-family: sans-serif;
  padding: 0px;
  margin: 0px;
  @media screen and (min-width: 568px) {
    font-size: 18px;
  }
`;
const TextBox = styled.p`
  background: #dbdbd0;
  font-size: 12px;
  font-family: sans-serif;
  border-radius: 2px;
  padding: 5px 20px 5px 10px;
  margin: 0px;
  @media screen and (min-width: 568px) {
    font-size: 16px;
    padding: 5px;
  }
`;

const InputAndButtonConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
  flex-wrap: wrap;
  flex-grow: 1;
  max-width: 300px;
  padding: 4px 6px;
  @media screen and (min-width: 568px) {
    font-size: 20px;
    max-width: 450px;
    padding: 6px 8px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ded6d3;
  flex-grow: 1;
  border-radius: 4px;
  padding: 4px;
  margin-right: 8px;
  @media screen and (min-width: 568px) {
    padding: 6px;
    margin-right: 14px;
  }
`;
const Input = styled.input`
  display: flex;
  flex-wrap: wrap;
  background-color: inherit;
  font-size: 12px;
  font-family: sans-serif;
  border: none;
  outline: none;
  padding: 3px;
  @media screen and (min-width: 568px) {
    font-size: 14px;
    padding: 5px;
  }
`;
const Button = styled.button`
  color: #ffffff;
  background: #ba3627;
  font-size: 12px;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 2px 6px;
  @media screen and (min-width: 568px) {
    font-size: 16px;
    padding: 4px 8px;
  }
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
