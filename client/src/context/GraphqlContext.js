// Imports
import { createContext, useState, useRef } from "react";
import { triggerBase64Download } from "common-base64-downloader-react";
import { dev } from "../config/config";

// Exports
export const UserContext = createContext();
export const UserContextProvider = (props) => {
  const [messages, setMessages] = useState("");
  const [pauseButtonPosition, setpauseButtonPosition] = useState(23 * 1.37);
  const [errorMessages, setErrorMessages] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    emailAdress: "",
    companyLogo:
      "https://www.shutterstock.com/image-vector/fog-smoke-isolated-transparent-special-600w-1914056554.jpg",
    aboutCompany: "",
    companyName: "Default",
    phoneNumber: "",
    recruiterName: "",
    webColor1: "#007DAA",
    webColor2: "#000000",
    webColor3: "#000000",
    id: "",
    token: "",
  });
  const userData = useRef();

  const UserGraphQLHandler = async (request, personalData) => {
    console.log(personalData);
    const requestList = [
      `mutation {
  createUser(userInput: {emailAdress:"${personalData.emailAdress}", companyLogo:"${personalData.companyLogo}", aboutCompany: "${personalData.aboutCompany}", companyName: "${personalData.companyName}", phoneNumber: "${personalData.phoneNumber}", recruiterName: "${personalData.recruiterName}", webColor1: "${personalData.webColor1}", webColor2: "${personalData.webColor2}", webColor3: "${personalData.webColor3}" })
  
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
    webColor3
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
      console.log(userData);
      setPersonalInfo(userData.current.data.login);
      props.setCompanyName(userData.current.data.login.companyName);
      if (userData.current.data.login.companyName) {
        setLoggedIn(true);
        props.setLoggedIn(true);
      }
    } else {
      console.log(userData);
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
