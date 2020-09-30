import React from "react";
import Button from "../../components/Button";
import DefaultPage from "../../components/DefaultPage";
import { Container } from "./styles";

const ButtonPage = () => {
  const BUTTON_TEXT =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur augue id facilisis venenatis. Aliquam at ipsum non est pellentesque placerat. Quisque id ligula lacinia, laoreet ex sit amet, egestas dui. Vestibulum ut neque in dolor egestas auctor. Fusce quis nisl vitae felis dictum congue. Pellentesque dignissim nulla ac lectus ullamcorper, sed imperdiet turpis molestie. Vestibulum vel ultricies sapien, et auctor augue. Mauris at mauris diam.";

  return (
    <DefaultPage title="Button" description={BUTTON_TEXT}>
      <Container>
        <Button>Disabled</Button>
        <Button>Disabled</Button>
        <Button>Disabled</Button>
        <Button>Disabled</Button>
      </Container>
    </DefaultPage>
  );
};

export default ButtonPage;
