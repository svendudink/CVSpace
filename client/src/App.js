import ButtonAppBar from "./components/ButtonAppBar";
import { UserContextProvider } from "./context/GraphqlContext.js";

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
  const [frames, setFrames] = React.useState(0);

  return (
    <UserContextProvider>
      <div className="textwatermark">
        <p>Retired</p>
      </div>
      <BrowserRouter>
        <Video setFrames={setFrames} />
        <ButtonAppBar />
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
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
