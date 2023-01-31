import React from "react";
import { UserContext } from "../context/GraphqlContext";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";

function Main() {
  const [message, setMessage] = useState("");
  const {
    setPersonalInfo,
    personalInfo,
    UserGraphQLHandler,

    setpauseButtonPosition,
  } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.split("/")[1] !== "main") {
      navigate("/main");
    }
    if (
      localStorage.getItem("token") !== "undefined" &&
      localStorage.getItem("token") !== null &&
      location.pathname.split("/")[1] !== "recruiter"
    ) {
      UserGraphQLHandler(1, { token: localStorage.getItem("token") });
      setpauseButtonPosition(23 * 1.37);
    } else {
      setMessage("Please use the QR code on the Resume you received");
    }
  }, []);

  return <div>{message}</div>;
}

export default Main;
