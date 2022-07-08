import styled from "styled-components";

const HeaderMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  width: 100%;
  border-bottom: 2px solid lightgray;
  padding: 10px;
`;
const SearchIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  border-radius: 50%;
  padding: 5px;
`;
const ButtonAndIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  min-width: 100px;
  max-width: 150px;
  padding: 2px;
  @media screen and (min-width: 768px) {
    max-width: 200px;
  }
`;
const AddButton = styled.button`
  background: none;
  border: none;
`;

const SelectUserContainer = styled.div``;
const Select = styled.select`
  border: none;
  outline: none;
  border-radius: 20px;
`;
const Option = styled.option`
  border: none;
  border-radius: 5px;
  padding: 20px;
`;
const NotificationIconContainer = styled.div``;

export {
  HeaderMainContainer,
  SearchIconContainer,
  ButtonAndIconContainer,
  AddButton,
  SelectUserContainer,
  NotificationIconContainer,
  Select,
  Option
};
