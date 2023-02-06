import { preFix } from "../config/config";
const fs = require("fs");
const replaceColor = require("replace-color");

const imgArray = [
  "HTMLCSS.png",
  "JS.png",
  "ts.png",
  "mongo.png",
  "Sqlite.png",
  "cplusplus.png",
  "github.png",
  "aws.png",
  "bootstrap.png",
  "express.png",
  "github.png",
  "graphql.png",
  "groq.png",
  "mui.png",
  "nodejs.png",
  "react.png",
  "wordpress.png",
  "python.png",
];
const logoColorUpload = (imageHexColor: String) => {
  try {
    imgArray.forEach((imageName) => {
      console.log("viewifloopruns", imageHexColor, imageName);
      replaceColor(
        {
          image: fs.readFileSync(`${preFix}src/logos/originals/${imageName}`),
          colors: {
            type: "hex",
            targetColor: "#000000",
            replaceColor: imageHexColor,
          },
        },
        (err: any, jimpObject: any) => {
          if (err) return console.log("colors for frontend", err);
          jimpObject.write(
            `${preFix}src/logos/${imageHexColor.replace("#", "")}${imageName}`,
            (err: any) => {
              if (err) {
                return console.log(err);
              } else console.log("success");
            }
          );
        }
      );
    });
  } catch {
    console.log("testdrive");
  }
};

export { logoColorUpload };
