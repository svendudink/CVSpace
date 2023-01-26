import React from "react";
import javascriptLogo from "../media/logos/JS.png";
import typescriptLogo from "../media/logos/ts.png";
import htmlCss from "../media/logos/HTMLCSS.png";
import MongoDB from "../media/logos/mongo.png";
import SQLite3 from "../media/logos/sqlite.png";
import GraphQL from "../media/logos/graphql.png";
import GitGithub from "../media/logos/github.png";
import Bootstrap from "../media/logos/bootstrap.png";
import NodeJS from "../media/logos/nodejs.png";
import Express from "../media/logos/express.png";
import Wordpress from "../media/logos/wordpress.png";
import MaterialUI from "../media/logos/mui.png";
import ReactJS from "../media/logos/react.png";
import Aws from "../media/logos/aws.png";
import groq from "../media/logos/groq.png";
import Cplusplus from "../media/logos/cplusplus.png";
import PaidIcon from "@mui/icons-material/Paid";

function Skills() {
  const skillArray = [
    {
      imgLink: javascriptLogo,
      name: "JavaScript",
      skillScore: 4,
    },
    {
      imgLink: typescriptLogo,
      name: "Typescript",
      skillScore: 2,
    },
    {
      imgLink: htmlCss,
      name: "HTML5/CSS3",
      skillScore: 3,
    },
    {
      imgLink: MongoDB,
      name: "MongoDB",
      skillScore: 2,
    },
    {
      imgLink: SQLite3,
      name: "SQLite3",
      skillScore: 2,
    },
    {
      imgLink: GraphQL,
      name: "GraphQL",
      skillScore: 3,
    },
    {
      imgLink: GitGithub,
      name: "Git/Github",
      skillScore: 2,
    },
    {
      imgLink: Bootstrap,
      name: "Bootstrap",
      skillScore: 2,
    },
    {
      imgLink: NodeJS,
      name: "NodeJS",
      skillScore: 3,
    },
    {
      imgLink: Express,
      name: "Express",
      skillScore: 3,
    },
    {
      imgLink: Wordpress,
      name: "Wordpress",
      skillScore: 3,
    },
    {
      imgLink: MaterialUI,
      name: "MaterialUI",
      skillScore: 2,
    },
    {
      imgLink: ReactJS,
      name: "ReactJS",
      skillScore: 3,
    },

    { imgLink: Aws, name: "AWS", skillScore: 2 },
    { imgLink: groq, name: "GROQ", skillScore: 2 },
    {
      imgLink: Cplusplus,
      name: "C++",
      skillScore: 1,
    },
  ];

  return (
    <div
      style={{
        width: "10vw",
        height: "auto",
        border: `5px solid green`,
        padding: "50px",
        margin: "20px",
        marginLeft: "80vw",
      }}
    >
      {skillArray.map((element) => {
        return (
          <div>
            <img
              style={{ width: "0.7vw", height: "auto" }}
              src={element.imgLink}
              alt="logo"
            />
            {element.name}
            {new Array(element.skillScore).fill(0).map((_, index) => (
              <PaidIcon />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
