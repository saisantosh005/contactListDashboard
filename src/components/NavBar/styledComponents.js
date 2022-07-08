import styled from "styled-components";

const NavBarMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 40px;
  padding-top: 50px;
  min-height: 100vh;
  /* position: fixed; */
  background-image: linear-gradient(orange, pink);
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: ${(props) => (props.selected ? "3px solid white" : "none")};
  font-size: 20px;
  color: white;
  padding: 5px;
  margin: 0px;
  margin-bottom: 13px;
  opacity: ${(props) => (props.selected ? "none" : "0.6")};
`;

export { NavBarMainContainer, IconContainer };
