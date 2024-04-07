import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import Header from "./components/header/header";
function App() {
  const images = [
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Donline%2Bstore%2Bbanner&psig=AOvVaw2mbxdKz-KQJnbRTkRydmIL&ust=1711101256128000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJiOwYaLhYUDFQAAAAAdAAAAABAo',
    'https://t4.ftcdn.net/jpg/03/47/83/19/360_F_347831937_oNJFzFUwEGfoKmUKj3ikH3jaYOQ9OEl3.jpg',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Donline%2Bstore%2Bbanner&psig=AOvVaw2mbxdKz-KQJnbRTkRydmIL&ust=1711101256128000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJiOwYaLhYUDFQAAAAAdAAAAABAg'
  ];
  return (
    <div className="app">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-content">
        <Outlet />
        {/* <Home images = {images}/> */}
      </div>
    </div>
  );
}

export default App;
