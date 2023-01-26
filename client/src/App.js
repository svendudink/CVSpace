import ButtonAppBar from "./components/ButtonAppBar";
import { UserContextProvider } from "./context/GraphqlContext.js";
import Watermark from "@uiw/react-watermark";
import { useState } from "react";

import React from "react";

import "./App.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import Skills from "./views/Skills";
import Video from "./views/Video";
import Main from "./views/Main";
import NewCV from "./views/NewCV";
import Recruiter from "./views/Recruiter";
import Projects from "./views/Projects";

console.log("tswaste");
function App() {
  const [frames, setFrames] = useState(0);
  const [companyName, setCompanyName] = useState("");

  return (
    <UserContextProvider setCompanyName={setCompanyName}>
      <BrowserRouter>
        <Video setFrames={setFrames} />
        <ButtonAppBar />
        <Watermark
          content={["Created with passion.", `      for ${companyName}`]}
          style={{ height: "100vh", background: "#fff" }}
        >
          <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/newcv" element={<NewCV />} />
            <Route path="/projects" element={<Projects />} />
            <Route
              path="/recruiter/:token/"
              element={<Recruiter frames={frames} />}
            />
          </Routes>
        </Watermark>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
