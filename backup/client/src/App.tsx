import ButtonAppBar from "./components/ButtonAppBar";
import { UserContextProvider } from "./context/GraphqlContext.js";

import React from "react";

import "./App.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import Skills from "./views/Skills";
import Video from "./views/Video";
import Main from "./views/Main";
import NewCV from "./views/NewCV";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Video />
        <ButtonAppBar />
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/newcv" element={<NewCV />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
