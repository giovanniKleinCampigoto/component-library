import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyles";
import ComponentPage from "./components/ComponentPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ComponentPage />
      </Router>
    </>
  );
}

export default App;
