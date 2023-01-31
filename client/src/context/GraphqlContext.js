import { createContext, useEffect, useState, useRef, useContext } from "react";
import { triggerBase64Download } from "common-base64-downloader-react";

import { useLocation } from "react-router";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const dev = false
  const location = useLocation();

  const [messages, setMessages] = useState("");
  const [pauseButtonPosition, setpauseButtonPosition] = useState(23 * 1.37);
  const [errorMessages, setErrorMessages] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    emailAdress: "",
    companyLogo: "",
    aboutCompany: "",
    companyName: "",
    phoneNumber: "",
    recruiterName: "",
    webColor1: "#007DAA",
    webColor2: "",
    id: "",
    token: "",
  });
  const userData = useRef();

  const UserGraphQLHandler = async (request, personalData) => {
    const requestList = [
      `mutation {
  createUser(userInput: {emailAdress:"${personalData.emailAdress}", companyLogo:"${personalData.companyLogo}", aboutCompany: "${personalData.aboutCompany}", companyName: "${personalData.companyName}", phoneNumber: "${personalData.phoneNumber}", recruiterName: "${personalData.recruiterName}", webColor1: "${personalData.webColor1}", webColor2: "${personalData.webColor2}" })
  
  {
   token
   file
   fileName
          
  }}
`,
      `{
        login(token: "${personalData.token}"){
          companyLogo
    aboutCompany
    companyName
    recruiterName
    webColor1
    webColor2
    id
        }
      }
`,
    ];

    const graphglQuery = {
      query: requestList[request],
    };

    await fetch(
      dev
        ? "http://localhost:8080/graphql"
        : "http://206.189.52.145:8080/graphql",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(graphglQuery),
      }
    )
      .then((res) => res.json())
      .then((resData) => (userData.current = resData));

    if (request === 1) {
      setPersonalInfo(userData.current.data.login);
      props.setCompanyName(userData.current.data.login.companyName);
      if (userData.current.data.login.companyName) {
        setLoggedIn(true);
        props.setLoggedIn(true);
      }
    } else {
      console.log("backend", userData.current.data.createUser.fileName);
      triggerBase64Download(
        "data:application/pdf;base64," + userData.current.data.createUser.file,
        userData.current.data.createUser.fileName
      );
    }
  };

  return (
    <UserContext.Provider
      value={{
        UserGraphQLHandler,

        loggedIn,
        setLoggedIn,
        errorMessages,
        setErrorMessages,

        messages,
        setMessages,
        setPersonalInfo,
        personalInfo,
        pauseButtonPosition,
        setpauseButtonPosition,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
