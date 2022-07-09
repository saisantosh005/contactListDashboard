import styled from "styled-components";

const DashBoaderMainContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  padding: 0px;
  margin: 0px;
  border: 2px solid red;
`;
const DashBoardHeaderAndDetailsContainer = styled.div`
  padding: 0px;
  width: 80vw;
`;
const WelcomeCardAndTableContainer = styled.div`
  padding: 4px;
  @media screen and (min-width: 568px) {
    padding: 8px;
  }
`;
export {
  DashBoaderMainContainer,
  DashBoardHeaderAndDetailsContainer,
  WelcomeCardAndTableContainer
};
