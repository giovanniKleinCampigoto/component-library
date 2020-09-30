import React from "react";

import { Container, Title, Description, Spacer } from "./styles";

interface DefaultPageProps {
  title: string;
  description: string;
}

const DefaultPage: React.FC<DefaultPageProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Spacer />
      <Description>{description}</Description>
      {children}
    </Container>
  );
};

export default DefaultPage;
