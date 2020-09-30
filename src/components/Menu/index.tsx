import React from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

import { Container, ComponentList, Title, ComponentItem } from "./styles";

interface ComponentObject {
  link: string;
  name: string;
}

const menuElements: ComponentObject[] = [
  {
    name: "Button",
    link: "/button",
  },
  {
    name: "Input",
    link: "/input",
  },
];

const Menu: React.FC = () => {
  return (
    <Container>
      <Title>
        <Link to="/">Getting Started</Link>
      </Title>
      <Title>Components</Title>
      <ComponentList>
        {menuElements.map((component) => (
          <Link key={component.name} to={component.link}>
            <ComponentItem>
              <FiChevronRight size={15} />
              <p>{component.name}</p>
            </ComponentItem>
          </Link>
        ))}
      </ComponentList>
    </Container>
  );
};

export default Menu;
