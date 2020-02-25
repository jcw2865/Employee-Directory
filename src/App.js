import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Table from "./components/Table";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Table>
          </Table>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
