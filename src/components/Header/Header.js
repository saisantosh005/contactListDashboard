import { Component } from "react";
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";

import {
  AddButton,
  ButtonAndIconContainer,
  HeaderMainContainer,
  NotificationIconContainer,
  SearchIconContainer,
  Select,
  Option
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
          <Select>
            <Option>Gekk</Option>
            <Option>Hekja</Option>
          </Select>
          <NotificationIconContainer>
            <AiOutlineBell />
          </NotificationIconContainer>
        </ButtonAndIconContainer>
      </HeaderMainContainer>
    );
  }
}

export default Header;
