import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="app">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-content">
        <Outlet />
        {/* <Home images = {images}/> */}
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
