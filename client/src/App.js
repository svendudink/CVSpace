import ButtonAppBar from "./components/ButtonAppBar";
import { UserContextProvider } from "./context/GraphqlContext.js";
import Watermark from "@uiw/react-watermark";
import { useState, useEffect, useContext } from "react";

import React from "react";

import "./App.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import Skills from "./views/Skills";
import Video from "./views/Video";
import Main from "./views/Main";
import NewCV from "./views/NewCV";
import Recruiter from "./views/Recruiter";
import Projects from "./views/Projects";
import MyFaq from "./views/Faq";
import Contact from "./views/Contact";
import DeepL from "./views/DeepL";
import Thanks from "./views/Thanks";

function App() {
  const token = localStorage.getItem("token") !== "undefined" ? true : false;
  const [frames, setFrames] = useState(0);
  const [companyName, setCompanyName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <UserContextProvider
        setLoggedIn={setLoggedIn}
        setCompanyName={setCompanyName}
      >
        <Video setFrames={setFrames} />
        <ButtonAppBar />
        <Watermark
          content={["Created with passion.", `      for ${companyName}`]}
          style={{ height: "100vh", background: "#fff" }}
        >
          <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path={"/main"} element={<Main />} />
            <Route path={"/thanks"} element={<Thanks />} />
            <Route path="/skills" element={loggedIn ? <Skills /> : <Main />} />
            <Route path="/faq" element={loggedIn ? <MyFaq /> : <Main />} />
            <Route path="/DeepL" element={<DeepL />} />
            <Route
              path="/contact"
              element={loggedIn ? <Contact /> : <Main />}
            />
            <Route path="/newcv" element={<NewCV />} />
            <Route
              path="/projects"
              element={loggedIn ? <Projects /> : <Main />}
            />
            <Route
              path="recruiter/:token/"
              element={<Recruiter frames={frames} />}
            />
          </Routes>
        </Watermark>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
