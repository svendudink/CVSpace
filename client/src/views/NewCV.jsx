import React, { useContext } from "react";
import { UserContext } from "../context/GraphqlContext";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

function NewCV() {
  const { personalInfo, setPersonalInfo, UserGraphQLHandler } =
    useContext(UserContext);

  const textInputHandler = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.id]: e.target.value });
    console.log(personalInfo);
  };

  const sendFormHandler = () => {
    UserGraphQLHandler(0, personalInfo);
  };

  return (
    <div>
      <div>
        <TextField
          required
          disabled={false}
          id="emailAdress"
          label="email"
          value={personalInfo.emailAdress ? personalInfo.emailAdress : ""}
          onChange={textInputHandler}
        />{" "}
        <br /> <br />
        <TextField
          required
          disabled={false}
          id="companyLogo"
          label="company logo png link"
          value={personalInfo.companyLogo ? personalInfo.companyLogo : ""}
          onChange={textInputHandler}
        />{" "}
        <br /> <br />
        <TextField
          disabled={false}
          id="aboutCompany"
          label="about company"
          value={personalInfo.aboutCompany ? personalInfo.aboutCompany : ""}
          onChange={textInputHandler}
        />
        <br /> <br />
        <TextField
          required
          disabled={false}
          id="companyName"
          label="company name"
          value={personalInfo.companyName ? personalInfo.companyName : ""}
          onChange={textInputHandler}
        />{" "}
        <br /> <br />
        <TextField
          disabled={false}
          id="phoneNumber"
          label="Phone Number"
          value={personalInfo.webColor2 ? personalInfo.recruiterName : ""}
          onChange={textInputHandler}
        />
        <br /> <br />
        <TextField
          required
          disabled={false}
          id="webColor1"
          label="webpage color 1"
          value={personalInfo.webColor1 ? personalInfo.webColor1 : ""}
          onChange={textInputHandler}
        />{" "}
        <br /> <br />
        <TextField
          disabled={false}
          id="webColor2"
          label="webpage color 2 (not in use untill afte MVP)"
          value={personalInfo.webColor2 ? personalInfo.webColor2 : ""}
          onChange={textInputHandler}
        />{" "}
        <br /> <br />
        <TextField
          disabled={false}
          id="recruiterName"
          label="name of recruiter"
          value={personalInfo.recruiterName ? personalInfo.recruiterName : ""}
          onChange={textInputHandler}
        />
        <Button onClick={sendFormHandler}>Send</Button>
      </div>
    </div>
  );
}

export default NewCV;
