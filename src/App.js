import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Template from "./pages/template";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/template" element={<Template/>}/>
      </Routes>
    </div>
  );
}

export default App;
