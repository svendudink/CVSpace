import { useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/GraphqlContext";
import { useNavigate } from "react-router";

import styled, { keyframes } from "styled-components";

import React from "react";

function DeepL(props) {
  const navigate = useNavigate();

  const { UserGraphQLHandler, personalInfo } = useContext(UserContext);
  const location = useLocation();
  console.log("deepl");

  useEffect(() => {
    UserGraphQLHandler(1, {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2Q5MWQ3NmQyNGUxNzliYTdkOGM3NTAiLCJpYXQiOjE2NzUxNzMyMzgsImV4cCI6MTg0Nzk3MzIzOH0.I2T3FKHSmfSgxjT6kfCeXDF7dIU4cKn0fBMbxLj1mBk",
    });
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2Q5MWQ3NmQyNGUxNzliYTdkOGM3NTAiLCJpYXQiOjE2NzUxNzMyMzgsImV4cCI6MTg0Nzk3MzIzOH0.I2T3FKHSmfSgxjT6kfCeXDF7dIU4cKn0fBMbxLj1mBk"
    );
    navigate("/main");
  }, []);

  return <div></div>;
}

export default DeepL;
