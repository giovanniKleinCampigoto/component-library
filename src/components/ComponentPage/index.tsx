import React from "react";
import { Container, ChildrenContainer } from "./styles";
import Routes from "../../routes";
import Menu from "../Menu";

const ComponentPage: React.FC = ({ children }) => {
  return (
    <Container>
      <Menu />
      <ChildrenContainer>
        <Routes />
      </ChildrenContainer>
    </Container>
  );
};

export default ComponentPage;
