import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  background: #f0f0f8;
  max-width: 300px;
  padding: 32px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  margin: 0;
  margin-bottom: 16px;

  a {
    text-decoration: none;
    color: black;
  }
`;

export const ComponentList = styled.ul`
  padding: 0;
  padding-left: 8px;
  list-style: none;
  margin: 0;
  width: 100%;

  a {
    text-decoration: none;
    color: black;
    width: 100%;
  }
`;

export const ComponentItem = styled.li`
  margin-bottom: 8px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;

  p {
    margin: 0;
    width: 100%;
    transition: transform 240ms;
  }

  &:hover {
    p {
      transform: translateX(5px);
    }
  }

  svg {
    margin-right: 8px;
  }
`;
