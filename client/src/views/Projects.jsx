import React from "react";
import "./Projects.css";

const data = [
  {
    name: "This project (CV Space)",
    projectLink: 19,
    github: "https://github.com/svendudink/CVSpace",
  },
  {
    name: "Bottle Luminous",
    projectLink: "https://bottleluminousfront.herokuapp.com/",
    github: "https://github.com/svendudink/bottleluminous",
  },
  {
    name: "Awesome GmbH",
    projectLink: "http://164.90.214.189:3000/",
    github: "https://github.com/svendudink/AwesomeGmbH",
  },
];

function Projects() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <table>
        <tr>
          <th>Project name</th>
          <th>Project link</th>
          <th>Github link</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>
                <a
                  href={val.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here
                </a>
              </td>
              <td>
                <a href={val.github} target="_blank" rel="noopener noreferrer">
                  Click here
                </a>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Projects;
