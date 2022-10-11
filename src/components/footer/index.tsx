import React from "react";
import Box from "../box";
import { CustomSpan, FooterContainer } from "./styles";

// import { Container } from './styles';

const Footer: React.FC = () => {
  const footerItems = [
    "Perguntas frequentes",
    "Central de ajuda",
    "Termos de uso",
    "Privacidade",
    "Preferências de cookies",
    "Informações corporativas",
  ];
  return (
    <FooterContainer>
      <Box
        w="100%"
        flexDirection="column"
        rowGap="20px"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Box w="100%">
          <CustomSpan>Dúvidas? Ligue 0800 591 8942</CustomSpan>
        </Box>
        <Box w="100%" flexWrap="wrap" columnGap="100px" rowGap="10px">
          {footerItems.map((item, key) => (
            <CustomSpan key={key}>{item}</CustomSpan>
          ))}
        </Box>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
