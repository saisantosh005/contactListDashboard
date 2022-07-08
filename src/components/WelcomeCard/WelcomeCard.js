import {
  WelcomeCardMainContainer,
  IconContainer,
  TitleAndDescriptionContainer,
  Title,
  Desription
} from "./styledComponents";

const WelcomeCard = () => {
  return (
    <WelcomeCardMainContainer>
      <IconContainer />
      <TitleAndDescriptionContainer>
        <Title>Contacts</Title>
        <Desription>Welcome to Your Contacts page</Desription>
      </TitleAndDescriptionContainer>
    </WelcomeCardMainContainer>
  );
};

export default WelcomeCard;
