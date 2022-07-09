import styled from "styled-components";
import { TiContacts } from "react-icons/ti";

const WelcomeCardMainContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: sans-serif;
  margin: 20px 12px;
  @media screen and (min-width: 768px) {
    margin: 30px 15px;
  }
`;

const IconContainer = styled(TiContacts)`
  text-align: center;
  color: #cc6535;
  font-size: 25px;
  padding: 2px;
  border-radius: 40px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`;
const TitleAndDescriptionContainer = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  padding: 0px;
  margin: 0px;
  margin-bottom: 2px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;
const Desription = styled.p`
  font-size: 14px;
  color: #b8b6b2;
  padding: 0px;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export {
  WelcomeCardMainContainer,
  IconContainer,
  TitleAndDescriptionContainer,
  Title,
  Desription
};
