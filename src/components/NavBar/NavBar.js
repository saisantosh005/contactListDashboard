import { IconContainer, NavBarMainContainer } from "./styledComponents";

import { IoMdContact } from "react-icons/io";
import { AiOutlineSetting, AiFillHome } from "react-icons/ai";

const NavBar = () => {
  return (
    <NavBarMainContainer>
      <IconContainer>
        <AiFillHome />
      </IconContainer>
      <IconContainer selected>
        <IoMdContact />
      </IconContainer>
      <IconContainer>
        <AiOutlineSetting />
      </IconContainer>
      <IconContainer></IconContainer>
    </NavBarMainContainer>
  );
};

export default NavBar;
