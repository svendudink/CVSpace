import { useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/GraphqlContext";

import styled, { keyframes } from "styled-components";

import React from "react";

function Recruiter(props) {
  const [snowboarder, setSnowboarder] = useState(false);
  console.log(props.frames);

  const { UserGraphQLHandler, personalInfo } = useContext(UserContext);
  const location = useLocation();

  console.log(personalInfo.companyLogo);

  useEffect(() => {
    UserGraphQLHandler(1, { token: location.pathname.split("/")[2] });
  }, []);

  return <div></div>;
}

export default Recruiter;
