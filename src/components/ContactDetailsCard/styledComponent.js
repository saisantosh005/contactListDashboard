import styled from "styled-components";
import { FiEdit2 } from "react-icons/fi";

import { BsChatSquareQuote } from "react-icons/bs";

const ContactDetailsCardMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  background-color: #e0e8df;
  max-width: 350px;
  border-radius: 8px;
  padding: 5px;
  margin: 4px;
  /* width: 100%; */
  @media screen and (min-width: 568px) {
    max-width: 350px;
    padding: 10px;
    margin: 10px;
  }
`;
const IconContainer = styled.div`
  font-size: 15px;
  text-align: right;
  margin: 8px;
`;

const LogoAndNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
  @media screen and (min-width: 568px) {
    font-size: 20px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightcoral;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  padding: 5px;
  margin-bottom: 5px;
  @media screen and (min-width: 568px) {
    width: 40px;
    height: 40px;
    padding: 6px;
  }
`;
const LogoName = styled.p`
  font-size: 14px;
  font-family: sans-serif;
  font-weight: 600;
  @media screen and (min-width: 568px) {
    font-size: 20px;
  }
`;

const DetailsContainer = styled.div`
  padding: 8px;
  margin-left: 8px;
  @media screen and (min-width: 568px) {
    padding: 12px;
    margin-left: 10px;
  }
`;
const LightText = styled.td`
  font-size: 16px;
  color: #9aa199;
  padding-right: 18px;
  @media screen and (min-width: 568px) {
    font-size: 20px;
    padding-right: 20px;
  }
`;
const BoldText = styled.td`
  color: black;
  font-size: 14px;
  font-family: sans-serif;
  @media screen and (min-width: 568px) {
    font-size: 18px;
  }
`;

const ButtonContainer = styled.div``;
const EditIcon = styled(FiEdit2)``;
const ChatIcon = styled(BsChatSquareQuote)``;

export {
  ContactDetailsCardMainContainer,
  IconContainer,
  LogoAndNameContainer,
  LogoContainer,
  LogoName,
  BoldText,
  LightText,
  DetailsContainer,
  ButtonContainer,
  EditIcon,
  ChatIcon
};
