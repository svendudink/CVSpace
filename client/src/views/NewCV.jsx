/////////////////////////////////////Sven's//Coding/ Date: 06-02-2023 13:11 ////////////
// Create a new CV
/////////////////////////////////////////gnidoC//s'nevS////////////////////////////////

// Imports
import React, { useContext } from "react";
import { UserContext } from "../context/GraphqlContext";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

function NewCV() {
  const { personalInfo, setPersonalInfo, UserGraphQLHandler } =
    useContext(UserContext);

  const textInputHandler = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.id]: e.target.value });
  };

  const sendFormHandler = () => {
    UserGraphQLHandler(0, personalInfo);
    console.log(personalInfo);
  };

  const textFields = [
    { id: "companyLogo", label: "company logo png link" },
    { id: "companyName", label: "company name" },
    { id: "webColor1", label: "CV and taskbar Color" },
    { id: "webColor2", label: "textColor CV" },
    { id: "webColor3", label: "SkillSpinner" },
    { id: "recruiterName", label: "Name of recruiter" },
    { id: "phoneNumber", label: "phone Number", disabled: true },
    { id: "emailAdress", label: "email", disabled: true },
    { id: "aboutCompany", label: "about Company", disabled: true },
  ];

  return (
    <div
      style={{
        marginTop: "5vw",

        margin: "auto",
        width: "15vw",
        border: "1px solid black",
        padding: "10px",
      }}
    >
      {textFields.map((field) => {
        return (
          <div>
            <TextField
              required
              disabled={field.disabled ? field.disabled : false}
              id={field.id}
              label={field.label}
              value={personalInfo[field.id] ? personalInfo[field.id] : ""}
              onChange={textInputHandler}
            />
            <br /> <br />
          </div>
        );
      })}
      <Button onClick={sendFormHandler}>Send</Button>
    </div>
  );
}

export default NewCV;
