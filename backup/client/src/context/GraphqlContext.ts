import { createContext, useEffect, useState, useRef, useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import {User,UserContextType} from "../types/User"



export const UserContext = createContext<UserContextType | null>(null);



const UserContextProvider: React.FC<React.ReactNode> = ({ children }) => {
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
  const [text, setText] = useState({
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
    logoLink: "",
    hashColor: "",
  });

  const userData = useRef({});


  useEffect(() => {
    setErrorMessages("");
  }, [activePage]);

  const UserGraphQLHandler = async (request, personalData) => {
    console.log(personalData);
    const requestList = [
      `mutation {
  createUser(userInput: {emailAdress:"${personalData.emailAdress}", companyLogo:"${personalData.companyLogo}", aboutCompany: "${personalData.aboutCompany}", companyName: "${personalData.companyName}", phoneNumber: "${personalData.phoneNumber}", recruiterName: "${personalData.recruiterName}", webColor1: "${personalData.webColor1}", webColor2: "${personalData.webColor2}" })
  
  {
    _id
  }}
`,
      `{
        login(emailAdress: "${personalData.webColor1}", companyLogo: "${personalData.webColor2}"){
          token
          userId
        }
      }
`,
      `{
        idLogin(id: "${personalData.id}", token: "${personalData.token}"){
    emailAdress
    companyLogo
    aboutCompany
    companyName
    phoneNumber
    recruiterName
    webColor1
    webColor2
    id
    token
        }
      }
`,
    ];
    console.log("view", requestList[request]);
    const graphglQuery = {
      query: requestList[request],
    };
    await fetch("https://bottle.hopto.org:8080/graphql", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(graphglQuery),
    })
      .then((res) => res.json())
      .then((resData) => (userData.current = resData))
  

    

  return (
    <UserContext.Provider
      value={{
        UserGraphQLHandler,
        userData,
        loggedIn,
        setLoggedIn,
        errorMessages,
        setErrorMessages,
        text,
        setText,
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
