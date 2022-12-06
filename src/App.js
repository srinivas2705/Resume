import React from "react";
import { Route, Routes } from "react-router-dom";
// import Accord from "./components/accordion";
import Home from "./pages/home";
import Template from "./pages/template";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/" element={<Accord/>}/> */}
      </Routes>
      {/* <Accord/><Accord/><Accord/><Accord/> */}
    </div>
  );
}

export default App;



