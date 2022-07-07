import { Component } from "react";
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";

import {
  AddButton,
  ButtonAndIconContainer,
  HeaderMainContainer,
  NotificationIconContainer,
  SearchIconContainer
} from "./styledComponents";

class Header extends Component {
  render() {
    return (
      <HeaderMainContainer>
        <SearchIconContainer>
          <AiOutlineSearch />
        </SearchIconContainer>
        <ButtonAndIconContainer>
          <AddButton>+ Add</AddButton>
          <NotificationIconContainer>
            <AiOutlineBell />
          </NotificationIconContainer>
        </ButtonAndIconContainer>
      </HeaderMainContainer>
    );
  }
}

export default Header;
