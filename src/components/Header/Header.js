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
    const { users, onChangeSelect } = this.props;
    return (
      <HeaderMainContainer>
        <SearchIconContainer>
          <AiOutlineSearch />
        </SearchIconContainer>
        <ButtonAndIconContainer>
          <AddButton>+ Add</AddButton>
          <Select onChange={onChangeSelect}>
            {users.map((item) => (
              <Option value={item.id} id={item.id}>
                {item.name}
              </Option>
            ))}
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
