import {
  ContactDetailsCardMainContainer,
  LogoAndNameContainer,
  LogoContainer,
  LogoName,
  BoldText,
  LightText,
  DetailsContainer,
  TextContainer
} from "./styledComponent";

const ContactDetailsCard = (props) => {
  const { name, email, phone, company, address } = props;
  return (
    <ContactDetailsCardMainContainer>
      <LogoAndNameContainer>
        <LogoContainer>
          <LogoName>{"santosh".slice(0, 2)}</LogoName>
        </LogoContainer>
        <BoldText>{name}</BoldText>
        <LightText>{company}</LightText>
      </LogoAndNameContainer>
      <DetailsContainer>
        <table>
          <tbody>
            <tr>
              <LightText>Full name</LightText> <BoldText> {name}</BoldText>
            </tr>
            <LightText>Email </LightText> <BoldText>{email}</BoldText>
            <tr>
              <LightText>Phone </LightText>
              <BoldText>{phone}</BoldText>
            </tr>
            <tr>
              <LightText>Company</LightText> <BoldText>{company}</BoldText>
            </tr>
            <tr>
              <LightText>
                Address <BoldText>{address}</BoldText>
              </LightText>
            </tr>
          </tbody>
        </table>
        <TextContainer></TextContainer>
      </DetailsContainer>
    </ContactDetailsCardMainContainer>
  );
};

export default ContactDetailsCard;
