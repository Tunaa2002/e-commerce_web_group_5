import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./components/home/home";
import Header from "./components/header/header";
function App() {
  return (
    <div className="app">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
