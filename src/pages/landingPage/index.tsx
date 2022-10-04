import React from "react";
import Box from "../../components/box";
import Button from "../../components/button";
import CardWrapper from "../../components/cardWrapper";
import Input from "../../components/input";

const LandingPage = () => {
  return (
    <Box
      h="100vh"
      w="100vw"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        gap: "15px",
      }}
    >
      <CardWrapper>
        <span style={{ color: "white" }}>Entrar</span>

        <Box w="100%" flexDirection="column">
          <Box w="80%" mb="10px">
            <Input title="Email ou número de telefone" />
          </Box>
          <Box w="80%" mb="10px">
            <Input title="Senha" />
          </Box>
        </Box>
        <Box w="80%">
          <Button title="Entrar" onClick={() => null} />
        </Box>
      </CardWrapper>
    </Box>
  );
};

export default LandingPage;
