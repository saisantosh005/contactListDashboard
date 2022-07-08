import styled from "styled-components";

const ChatBoardMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  width: 100%;
  margin: 8px;
  padding: 6px;
  border-radius: 15px;
  @media screen and (min-width: 568px) {
    max-width: 350px;
    margin: 10px;
    padding: 10px;
  }
`;
const ChardBoardChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #edede6;
  align-items: flex-start;
  align-self: stretch;
  flex-grow: 1;
  max-height: 200px;
  padding: 10px;
  border-radius: 15px;
  overflow: auto;
  @media screen and (min-width: 568px) {
    max-width: 400px;
  }
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
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 2px;
  margin-right: ${(props) => (props.status === "to" ? "5px" : "0px")};
  margin-left: ${(props) => (props.status === "to" ? "0px" : "5px")};
  @media screen and (min-width: 568px) {
    width: 22px;
    height: 22px;
    padding: 5px;
  }
`;
const Logo = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
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
  border-radius: 2px;
  font-family: sans-serif;
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
  flex-wrap: wrap;
  align-self: stretch;
  flex-grow: 1;
  max-width: 300px;
  padding: 4px 6px;
  @media screen and (min-width: 568px) {
    padding: 6px 8px;
    font-size: 20px;
    max-width: 450px;
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
    margin-right: 14px;
    padding: 6px;
  }
`;
const Input = styled.input`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  font-family: sans-serif;
  background-color: inherit;
  border: none;
  outline: none;
  padding: 3px;
  @media screen and (min-width: 568px) {
    font-size: 14px;
    padding: 5px;
  }
`;
const Button = styled.button`
  font-size: 12px;
  color: #ffffff;
  background: #ba3627;
  border: none;
  outline: none;
  padding: 2px 6px;
  border-radius: 5px;
  @media screen and (min-width: 568px) {
    padding: 4px 8px;
    font-size: 16px;
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
