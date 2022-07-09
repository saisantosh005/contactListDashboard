import styled from "styled-components";

const DashBoaderMainContainer = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  padding: 0px;
  margin: 0px;
`;
const DashBoardHeaderAndDetailsContainer = styled.div`
  width: 100%;
  padding: 0px;
`;
const WelcomeCardAndTableContainer = styled.div`
  padding: 15px;
  @media screen and (min-width: 568px) {
    padding: 20px;
  }
`;
export {
  DashBoaderMainContainer,
  DashBoardHeaderAndDetailsContainer,
  WelcomeCardAndTableContainer
};
