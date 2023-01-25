import { createContext, useEffect, useState, useRef, useContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [messages, setMessages] = useState("");
  const [errorMessages, setErrorMessages] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    emailAdress: "",
    companyLogo: "",
    aboutCompany: "",
    companyName: "",
    phoneNumber: "",
    recruiterName: "",
    webColor1: "",
    webColor2: "",
    id: "",
    token: "",
  });
  const userData = useRef();

  const UserGraphQLHandler = async (request, personalData) => {
    console.log(personalData.token);
    const requestList = [
      `mutation {
  createUser(userInput: {emailAdress:"${personalData.emailAdress}", companyLogo:"${personalData.companyLogo}", aboutCompany: "${personalData.aboutCompany}", companyName: "${personalData.companyName}", phoneNumber: "${personalData.phoneNumber}", recruiterName: "${personalData.recruiterName}", webColor1: "${personalData.webColor1}", webColor2: "${personalData.webColor2}" })
  
  {
   token
          
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

    await fetch(request === 0 ? "/graphql" : "../graphql", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(graphglQuery),
    })
      .then((res) => res.json())
      .then((resData) => (userData.current = resData));
    setPersonalInfo(userData.current.data.login);
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
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
