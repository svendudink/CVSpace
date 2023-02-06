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
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import SaveIcon from "@mui/icons-material/Save";
import { UserContext } from "../context/GraphqlContext";
import { useContext, useState } from "react";

function Skills() {
  const { personalInfo } = useContext(UserContext);

  const [opacity, setOpacity] = useState(0);
  const [skillStory, setSkillStory] = useState(
    <div>
      Welcome, move your mouse over <br /> the different icons to read my story
    </div>
  );

  const skillArray = [
    {
      imgLink: javascriptLogo,
      name: "JavaScript",
      skillScore: 4,
      skillStory: `i started in januari 2021 with an Udemy Course, since than i have been coding on a daily basis, from Ferbuari until june, i did another 840 Hour Course on the code Academy, at the moment i have created 11 Projects and i estimate my javascript coding time on around 3000 hours`,
    },
    {
      imgLink: typescriptLogo,
      name: "Typescript",
      skillScore: 2,
      skillStory:
        "i started on the Code academy with typescript. since than i have been mainly using it in NodeJS projects",
    },
    {
      imgLink: htmlCss,
      name: "HTML5/CSS3",
      skillScore: 3,
      skillStory:
        "i started with HTML/CSS after i was allready proficient in Javascript. i am happy to improve it in case it needed in a job. but my interest lays more with programming",
    },
    {
      imgLink: MongoDB,
      name: "MongoDB",
      skillScore: 2,
      skillStory:
        "i used MongoDB on 5 projects so far, and i pretty much grasped the basics of MongoDB",
    },
    {
      imgLink: SQLite3,
      name: "SQLite3",
      skillScore: 2,
      skillStory:
        "i used SQLite3 on my Bottle Luminous porject, i experimented with different drivers to reach the wanted result, i understand the basics",
    },
    {
      imgLink: GraphQL,
      name: "GraphQL",
      skillScore: 3,
      skillStory:
        "i use GraphQL on all my projects, i got pretty proficient in the basics",
    },
    {
      imgLink: GitGithub,
      name: "Git/Github",
      skillScore: 2,
      skillStory: "i understand the basics and the importance of Github, ",
    },
    {
      imgLink: Bootstrap,
      name: "Bootstrap",
      skillScore: 2,
      skillStory: "i used bootstrap for my first projects",
    },
    {
      imgLink: NodeJS,
      name: "NodeJS",
      skillScore: 3,
      skillStory:
        "My very favorite so far, i still have a lot to learn, but i am very passionate about NodeJS and everything it has to bring",
    },
    {
      imgLink: Express,
      name: "Express",
      skillScore: 3,
      skillStory:
        "a great framework to make live a bit easier, i use it in all my NodeJS projects",
    },
    {
      imgLink: Wordpress,
      name: "Wordpress",
      skillScore: 3,
      skillStory: "i made one wordpress website in 2018 for my Company",
    },
    {
      imgLink: MaterialUI,
      name: "MaterialUI",
      skillScore: 2,
      skillStory:
        "My favorite component library, all my recent projects use this library",
    },
    {
      imgLink: ReactJS,
      name: "ReactJS",
      skillScore: 3,
      skillStory:
        "i use ReactJS in general, i understand the basics, and some more advanced concepts",
    },

    {
      imgLink: Aws,
      name: "AWS",
      skillScore: 2,
      skillStory: "i used a variety AWS. like S3 bucket, VPS, and as DataBase",
    },
    {
      imgLink: groq,
      name: "GROQ",
      skillScore: 2,
      skillStory:
        "i used GROQ on one project. this project is still in production",
    },
    {
      imgLink: Cplusplus,
      name: "C++",
      skillScore: 1,
      skillStory:
        "i only followed a few classes. but im very keen to learn C++",
    },
  ];

  return (
    <div>
      <div
        style={{
          width: "15vw",
          height: "auto",
          border: `5px black`,
          position: "fixed",

          padding: "50px",
          margin: "20px",
          marginLeft: "30vw",
          marginTop: "5vw",
        }}
      >
        {skillArray.map((skill, index) => {
          const numPoints = 15;
          const pointSize = 6;
          const radius = 450;
          const x =
            radius + radius * Math.cos((2 * Math.PI * index) / numPoints);
          const y =
            radius + radius * Math.sin((2 * Math.PI * index) / numPoints);
          let left = `${(x - pointSize / 2) / 30}vw`;
          let top = `${(y - pointSize / 2) / 30}vw`;

          return (
            <div
              key={`${index}g`}
              style={{
                width: "100px",

                height: "100px",
                borderRadius: "50%",
                position: "fixed",
                margin: "50px auto",
                marginTop: top,
                marginLeft: left,
              }}
            >
              <div>
                <img
                  onMouseOver={() => {
                    setSkillStory(skillArray[index].skillStory);
                  }}
                  onMouseLeave={() => {
                    setSkillStory(
                      <div>
                        Welcome, move your mouse over <br /> the different icons
                        to read my story
                      </div>
                    );
                  }}
                  style={{
                    width: "1.9vw",
                    height: "auto",
                    opacity,
                    transition: `opacity ${0 + index / 5}s ease-in-out`,
                  }}
                  onLoad={() => {
                    setOpacity(1);
                  }}
                  src={skill.imgLink}
                  alt="logo"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div
        key={`${"ghg"}g`}
        style={{
          opacity,
          transition: "opacity 1.5s ease-in-out",
          position: "fixed",
          marginTop: "43vh",
          marginLeft: "42vw",
          textAlign: "center",
          width: "15vw",
          fontSize: "1vw",
          fontWeight: "bold",
        }}
        onLoad={() => {
          setOpacity(1);
        }}
      >
        {skillStory}
      </div>
      <div
        key={`ghg`}
        style={{
          position: "fixed",
          width: "15vw",
          height: "auto",
          border: `5px black`,

          padding: "50px",
          margin: "20px",
          marginLeft: "65vw",
          marginTop: "5vw",
        }}
      >
        {skillArray.map((skill, index) => {
          return (
            <tr
              style={{
                background: `${
                  index % 2 === 0 ? personalInfo.webColor1 : "white"
                }`,
              }}
              key={`${index}a`}
            >
              <td>
                <img
                  key={`${index}b`}
                  style={{ width: "0.9vw", height: "auto" }}
                  src={skill.imgLink}
                  alt="logo"
                />
              </td>

              <td style={{ fontSize: "1vw" }} key={`${index}c`}>
                {skill.name}
              </td>
              <td key={`${index}d`}>
                {new Array(5)
                  .fill(0)
                  .map((_, index) =>
                    skill.skillScore <= index ? (
                      <SaveOutlinedIcon
                        style={{ fontSize: "1.5vw" }}
                        key={`${index}e`}
                      />
                    ) : (
                      <SaveIcon
                        style={{ fontSize: "1.5vw" }}
                        key={`${index}f`}
                      />
                    )
                  )}
              </td>
            </tr>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
