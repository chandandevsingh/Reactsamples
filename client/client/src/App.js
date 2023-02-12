import logo from "./logo.svg";
import "./App.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import { BrowserRouter as Router } from "react-router-dom";
import { Routers } from "./components/routers/Routers";

function App() {
  const appName = "KHconnector";
  return (
    <>
      <Router>
        <Header appName={appName}></Header>

        <Routers></Routers>
        <Footer appName={appName}></Footer>
      </Router>
    </>
  );
}

export default App;
