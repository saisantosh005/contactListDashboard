import styled from "styled-components";

const HeaderMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 2px solid lightgray;
`;
const SearchIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 5px;
  background-color: lightgray;
`;
const ButtonAndIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
  width: 40%;
  max-width: 300px;
`;
const AddButton = styled.button`
  background: none;
  border: none;
`;

const SelectUserContainer = styled.div``;
const NotificationIconContainer = styled.div``;

export {
  HeaderMainContainer,
  SearchIconContainer,
  ButtonAndIconContainer,
  AddButton,
  SelectUserContainer,
  NotificationIconContainer
};