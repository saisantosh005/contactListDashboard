import styled from "styled-components";

const ContactDetailsCardMainContainer = styled.div`
  background-color: #e0e8df;
  padding: 10px;
  margin: 10px;
  max-width: 350px;
  /* border: 2px solid red; */
  border-radius: 8px;
`;
const LogoAndNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  padding: 5px;
  border-radius: 50%;
  background-color: lightcoral;
`;
const LogoName = styled.p`
  font-family: "Roboto";
  font-weight: bold;
`;

const DetailsContainer = styled.div``;
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
export {
  ContactDetailsCardMainContainer,
  LogoAndNameContainer,
  LogoContainer,
  LogoName,
  BoldText,
  LightText,
  DetailsContainer,
  TextContainer
};
