"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoColorUpload = void 0;
const config_1 = require("../config/config");
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
const logoColorUpload = (imageHexColor) => {
    try {
        imgArray.forEach((imageName) => {
            console.log("viewifloopruns", imageHexColor, imageName);
            replaceColor({
                image: fs.readFileSync(`${config_1.preFix}src/logos/originals/${imageName}`),
                colors: {
                    type: "hex",
                    targetColor: "#000000",
                    replaceColor: imageHexColor,
                },
            }, (err, jimpObject) => {
                if (err)
                    return console.log("colors for frontend", err);
                jimpObject.write(`${config_1.preFix}src/logos/${imageHexColor.replace("#", "")}${imageName}`, (err) => {
                    if (err) {
                        return console.log(err);
                    }
                    else
                        console.log("success");
                });
            });
        });
    }
    catch (_a) {
        console.log("testdrive");
    }
};
exports.logoColorUpload = logoColorUpload;
