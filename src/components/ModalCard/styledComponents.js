import styled from "styled-components";
import Modal from "react-modal";

const ModalMainContainer = styled(Modal)`
  background-color: #ffffff;
  min-height: 150px;
  width: 70%;
  min-width: 200px;
  max-width: 300px;
  @media screen and (min-width: 568px) {
    width: 50%;
  }
`;
const ModalContainer = styled.div`
  width: 100%;
`;
const Input = styled.input`
  font-size: 12px;
  font-family: sans-serif;
  background-color: #ded6d3;
  border: none;
  border-radius: 3px;
  outline: none;
  padding: 4px;
  @media screen and (min-width: 568px) {
    font-size: 14px;
    padding: 8px;
    border-radius: 5px;
  }
`;

const LabelAndInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 4px;
  @media screen and (min-width: 568px) {
    margin: 6px;
  }
`;
const Label = styled.label`
  font-family: sans-serif;
  font-size: 10px;
  width: 60px;
  @media screen and (min-width: 568px) {
    font-size: 16px;
    width: 80px;
  }
`;

const ButtonContainer = styled.div`
  margin: 5px;
  @media screen and (min-width: 568px) {
    margin: 10px;
  }
`;
const Button = styled.button`
  font-size: 10px;
  font-family: sans-serif;
  color: white;
  background-image: linear-gradient(to right, #f0520a, #f00a71);
  border: none;
  border-radius: 6px;
  padding: 6px;
  margin: 2px;
  @media screen and (min-width: 568px) {
    font-size: 16px;
    padding: 8px;
  }
`;

const ErrorText = styled.span`
  color: red;
  font-size: 12px;
`;

export {
  ModalContainer,
  ModalMainContainer,
  Input,
  LabelAndInputContainer,
  Label,
  ButtonContainer,
  Button,
  ErrorText
};
