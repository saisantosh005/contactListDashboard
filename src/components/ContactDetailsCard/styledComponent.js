import styled from "styled-components";
import { FiEdit2 } from "react-icons/fi";

import { BsChatSquareQuote } from "react-icons/bs";

const ContactDetailsCardMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #e0e8df;
  padding: 5px;
  margin: 10px;
  max-width: 300px;
  border-radius: 8px;
`;
const LogoAndNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 5px;
  margin-bottom: 5px;
  background-color: lightcoral;
`;
const LogoName = styled.p`
  font-family: "Roboto";
  font-weight: bold;
`;

const DetailsContainer = styled.div`
  padding: 10px;
  margin-left: 10px;
`;
const LightText = styled.td`
  font-size: 16px;
  color: #9aa199;
  padding-right: 20px;
`;
const BoldText = styled.td`
  color: black;
  font-family: "Roboto";
`;
const TextContainer = styled.div``;

const ButtonContainer = styled.div``;
const EditIcon = styled(FiEdit2)``;
const ChatIcon = styled(BsChatSquareQuote)``;
export {
  ContactDetailsCardMainContainer,
  LogoAndNameContainer,
  LogoContainer,
  LogoName,
  BoldText,
  LightText,
  DetailsContainer,
  TextContainer,
  ButtonContainer,
  EditIcon,
  ChatIcon
};
