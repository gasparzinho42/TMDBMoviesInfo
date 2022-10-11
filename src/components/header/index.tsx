import React from "react";
import { HeaderContainer } from "./styles";
import netflixLogo from "../../assets/icons/Netflix-Logo.wine.svg";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={netflixLogo} width="166px" height="45px" alt="Netflix Logo" />
    </HeaderContainer>
  );
};

export default Header;
