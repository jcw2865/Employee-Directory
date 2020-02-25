import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Table from "./components/Table/table";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
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
