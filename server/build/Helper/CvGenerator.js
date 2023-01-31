"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config/config");
const fs = require("fs");
const PDFDocument = require("pdfkit");
const replaceColor = require("replace-color");
const QRCode = require("qrcode");
const blobStream = require("blob-stream");
console.log(config_1.dev);
const mmToPtX = (x) => {
    const xProcent = x / 2.1;
    return 5.9528 * xProcent;
};
const mmToPtY = (y) => {
    const yProcent = y / 2.97;
    return 8.4189 * yProcent;
};
if (fs.existsSync(`./logos/Archivo-Bold.ttf`)) {
    console.log("nailed it1");
}
else {
    console.log("fail");
}
if (fs.existsSync(`./Archivo-Bold.ttf`)) {
    console.log("nailed it2");
}
else {
    console.log("fail");
}
if (fs.existsSync(`/logos/Archivo-Bold.ttf`)) {
    console.log("nailed it3");
}
else {
    console.log("fail");
}
if (fs.existsSync(`logos/Archivo-Bold.ttf`)) {
    console.log("nailed it4");
}
else {
    console.log("fail");
}
if (fs.existsSync(`/Archivo-Bold.ttf`)) {
    console.log("nailed it5");
}
else {
    console.log("fail");
}
if (fs.existsSync(`app/server/Archivo-Bold.ttf`)) {
    console.log("nailed it6");
}
else {
    console.log("fail");
}
if (fs.existsSync(`/app/server/Archivo-Bold.ttf`)) {
    console.log("nailed it7");
}
else {
    console.log("fail");
}
if (fs.existsSync(`./app/server/Archivo-Bold.ttf`)) {
    console.log("nailed it8");
}
else {
    console.log("fail");
}
if (fs.existsSync(`app/server/Archivo-Bold.ttf`)) {
    console.log("nailed it9");
}
else {
    console.log("fail");
}
if (fs.existsSync(`/server/Archivo-Bold.ttf`)) {
    console.log("nailed it10");
}
else {
    console.log("fail");
}
if (fs.existsSync(`./server/Archivo-Bold.ttf`)) {
    console.log("nailed it11");
}
else {
    console.log("fail");
}
if (fs.existsSync(`server/Archivo-Bold.ttf`)) {
    console.log("nailed it12");
}
else {
    console.log("fail");
}
if (fs.existsSync(`build/Archivo-Bold.ttf`)) {
    console.log("nailed it13");
}
else {
    console.log("fail");
}
if (fs.existsSync(`/build/Archivo-Bold.ttf`)) {
    console.log("nailed it14");
}
else {
    console.log("fail");
}
if (fs.existsSync(`./build/Archivo-Bold.ttf`)) {
    console.log("nailed it15");
}
else {
    console.log("fail");
}
if (fs.existsSync(`../build/Archivo-Bold.ttf`)) {
    console.log("nailed it16");
}
else {
    console.log("fail");
}
const ImgColorConvert = (file, textHexColor) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        console.log(textHexColor, "valid");
        replaceColor({
            image: fs.readFileSync(config_1.dev ? `./logos/originals/${file}` : `server/${file}`),
            colors: {
                type: "hex",
                targetColor: "#000000",
                replaceColor: textHexColor,
            },
        }, (err, jimpObject) => {
            if (err)
                return console.log(err);
            jimpObject.write(fs.createWriteStream(config_1.dev
                ? `../logos/${textHexColor}${file}`
                : `server/${textHexColor}${file}`), (err) => {
                if (err) {
                    return console.log(err);
                }
                else
                    resolve(err);
            });
        });
    });
});
const QRCodeGenrator = (text) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(yield QRCode.toDataURL(text));
        yield QRCode.toFile(config_1.dev ? "pqr.png" : "server/pqr.png", text);
    }
    catch (err) {
        console.error(err);
    }
});
const docCreator = (name, companyName, hexColor, textColor, imageName, ID, token) => __awaiter(void 0, void 0, void 0, function* () {
    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzkyMmZlYjBkNTQwYjJhNDU1MDhhYmIiLCJlbWFpbEFkcmVzcyI6ImFybmhlbXN0YWRAZ21haWwuY29tIiwiaWF0IjoxNjcwNTI0OTA3LCJleHAiOjE3MDIwNjA5MDd9.md07OVPVj0tqDYr5bkvdWG8jYhYPWmmsueFQqvy_9aI";
    // const ID = "63922feb0d540b2a45508abb";
    const linkAdress = `http://206.189.52.145:3000/recruiter/${token}`;
    // const textColor = "#0c1e4d";
    yield QRCodeGenrator(linkAdress);
    if (!fs.existsSync(`server/${textColor}JS.png`)) {
        yield ImgColorConvert("HTMLCSS.png", textColor);
        yield ImgColorConvert("JS.png", textColor);
        yield ImgColorConvert("ts.png", textColor);
        yield ImgColorConvert("mongo.png", textColor);
        yield ImgColorConvert("Sqlite.png", textColor);
        yield ImgColorConvert("cplusplus.png", textColor);
        yield ImgColorConvert("github.png", textColor);
        yield ImgColorConvert("aws.png", textColor);
        yield ImgColorConvert("bootstrap.png", textColor);
        yield ImgColorConvert("express.png", textColor);
        yield ImgColorConvert("github.png", textColor);
        yield ImgColorConvert("graphql.png", textColor);
        yield ImgColorConvert("groq.png", textColor);
        yield ImgColorConvert("mui.png", textColor);
        yield ImgColorConvert("nodejs.png", textColor);
        yield ImgColorConvert("react.png", textColor);
        yield ImgColorConvert("wordpress.png", textColor);
        yield ImgColorConvert("python.png", textColor);
    }
    const sFont = 11;
    const mFont = 17;
    const lFont = 50;
    console.log(config_1.dev);
    console.log(name, companyName, hexColor, imageName);
    try {
        console.log("test");
        // Create a document
        const doc = new PDFDocument({
            size: "A4",
            margins: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
        });
        doc
            .save()
            .moveTo(0, 0)
            .lineTo(0, 841.89)
            .lineTo(220, 841.89)
            .lineTo(220, 180)
            .lineTo(595.28, 180)
            .lineTo(595.28, 50)
            .lineTo(220, 50)
            .lineTo(220, 0)
            .lineTo(0, 0)
            .fill(hexColor);
        // draw some text
        //595.28 x 841.89
        doc.font(config_1.dev ? "Archivo-Bold.ttf" : "server/Archivo-Bold.ttf");
        doc.fillColor(textColor);
        doc.fontSize(mFont);
        // doc.image("CVnoBackground.png", 0, 0, { width: 595.28 });
        doc.text(`Generated for ${name}`, 270, 17);
        doc.image(fs.readFileSync(config_1.dev ? `${imageName}` : `server/${imageName}`), 225, 5, {
            fit: [40, 40],
        });
        //CV Name
        doc.fontSize(lFont).text(`Sven Dudink`, mmToPtX(85), mmToPtY(27));
        //CV Job-title
        doc.fontSize(mFont);
        doc.text(`FULL-STACK-WEB-DEVELOPER`, mmToPtX(85), mmToPtY(53));
        //Short description
        doc.fontSize(mFont).text(`SHORT DESCRIPTION`, mmToPtX(5), mmToPtY(73));
        doc
            .fontSize(sFont)
            .text(`Creative professional with excellent problem solving skills looking for a new oppertunity  in programming & Software development`, mmToPtX(2), mmToPtY(80), {
            width: mmToPtX(75),
            align: "center",
        });
        //Short description
        doc.fontSize(mFont).text(`TECH-STACK`, mmToPtX(5), mmToPtY(105));
        console.log("init");
        // QR Code and directLink
        doc.image(fs.readFileSync(config_1.dev ? "pqr.png" : "server/pqr.png"), mmToPtX(8), mmToPtY(10), {
            fit: [mmToPtX(60), mmToPtY(60)],
        });
        doc.link(mmToPtX(8), mmToPtY(0), mmToPtX(60), mmToPtY(68), linkAdress);
        doc
            .fontSize(sFont)
            .text(`Scan or Click on QR Code for video resume`, mmToPtX(1), mmToPtY(1), {
            width: mmToPtX(75),
            align: "center",
        });
        //Fill dots
        let x = 200;
        let y = 600;
        // Skillmeter
        const skillScore = (x, y, skills) => {
            for (let i = 0; i < skills; i++) {
                doc
                    .circle(x + i * 10, y, 5)
                    .lineWidth(2)
                    .fillAndStroke(textColor, textColor);
            }
            for (let i = 0; i < 5; i++) {
                doc
                    .circle(x + i * 10, y, 5)
                    .lineWidth(2)
                    .stroke();
            }
        };
        // Bring skillnames skillmeter and images together
        const skillNames = (indSkillNames) => {
            let startX = mmToPtX(5);
            let startY = mmToPtY(114);
            indSkillNames.forEach((el, ind) => {
                console.log(el.imgLink);
                doc
                    .fontSize(sFont)
                    .fillColor(textColor)
                    .image(el.imgLink, startX, startY + ind * 15, {
                    fit: [12, 12],
                })
                    .text(el.name, startX + 20, startY + ind * 15);
                skillScore(startX + 120, startY + 8 + ind * 15, el.skillScore);
            });
        };
        console.log("errormeasure1");
        const skillArray = [
            {
                imgLink: `server/${textColor}JS.png`,
                name: "JavaScript",
                skillScore: 4,
            },
            {
                imgLink: `server/${textColor}ts.png`,
                name: "Typescript",
                skillScore: 2,
            },
            {
                imgLink: `server/${textColor}HTMLCSS.png`,
                name: "HTML5/CSS3",
                skillScore: 3,
            },
            {
                imgLink: `server/${textColor}mongo.png`,
                name: "MongoDB",
                skillScore: 2,
            },
            {
                imgLink: `server/${textColor}Sqlite.png`,
                name: "SQLite3",
                skillScore: 2,
            },
            {
                imgLink: `server/${textColor}graphql.png`,
                name: "GraphQL",
                skillScore: 3,
            },
            {
                imgLink: `server/${textColor}github.png`,
                name: "Git/Github",
                skillScore: 2,
            },
            {
                imgLink: `server/${textColor}bootstrap.png`,
                name: "Bootstrap",
                skillScore: 2,
            },
            {
                imgLink: `server/${textColor}nodejs.png`,
                name: "NodeJS",
                skillScore: 3,
            },
            {
                imgLink: `server/${textColor}express.png`,
                name: "Express",
                skillScore: 3,
            },
            {
                imgLink: `server/${textColor}wordpress.png`,
                name: "Wordpress",
                skillScore: 3,
            },
            {
                imgLink: `server/${textColor}mui.png`,
                name: "MaterialUI",
                skillScore: 2,
            },
            {
                imgLink: `server/${textColor}react.png`,
                name: "ReactJS",
                skillScore: 3,
            },
            { imgLink: `server/${textColor}aws.png`, name: "AWS", skillScore: 2 },
            { imgLink: `server/${textColor}groq.png`, name: "GROQ", skillScore: 2 },
            {
                imgLink: `server/${textColor}cplusplus.png`,
                name: "C++",
                skillScore: 1,
            },
            // {
            //   imgLink: `./logos/${textColor}python.png`,
            //   name: "Python",
            //   skillScore: 1,
            // },
        ];
        console.log("errormeasure2");
        skillNames(skillArray);
        // end of Tech stack
        //lAnguage Skills
        doc.fontSize(mFont).text(`LANGUAGE SKILLS`, mmToPtX(5), mmToPtY(205));
        doc.fontSize(sFont).text(`Dutch: Native`, mmToPtX(5), mmToPtY(215));
        doc.fontSize(sFont).text(`English: Advanced`, mmToPtX(5), mmToPtY(220));
        doc
            .fontSize(sFont)
            .text(`German: Upper-intermediate`, mmToPtX(5), mmToPtY(225));
        //Personal Data
        doc.fontSize(mFont).text(`PERSONAL DATA`, mmToPtX(5), mmToPtY(235 + 10));
        doc
            .fontSize(sFont)
            .text(`Nationality: Dutch`, mmToPtX(5), mmToPtY(245 + 10));
        doc
            .fontSize(sFont)
            .text(`Birth date: 04-04-1988`, mmToPtX(5), mmToPtY(250 + 10));
        doc
            .fontSize(sFont)
            .text(`Adress: Burgsdorfstrasse 15`, mmToPtX(5), mmToPtY(255 + 10));
        doc.fontSize(sFont).text(`13353 Berlin`, mmToPtX(5), mmToPtY(260 + 10));
        doc
            .fontSize(sFont)
            .text(`Phone: +49(0)1738346578`, mmToPtX(5), mmToPtY(265 + 10));
        doc
            .fontSize(sFont)
            .text(`mail: sven@dudink.net`, mmToPtX(5), mmToPtY(270 + 10));
        doc
            .fontSize(sFont)
            .text(`Github: https://github.com/svendudink`, mmToPtX(5), mmToPtY(275 + 10));
        //Working experience
        const jobCreation = (jobDate, jobRole, company, taskArray, positionYmm) => {
            const positionXmm = 85;
            doc
                .fontSize(sFont)
                .font(config_1.dev ? "Archivo-Bold.ttf" : "server/Archivo-Bold.ttf")
                .text(jobDate, mmToPtX(positionXmm), mmToPtY(positionYmm), {
                align: "left",
                continued: true,
            })
                .font(config_1.dev ? "Archivo-SuperBold.ttf" : "server/Archivo-SuperBold.ttf")
                .text(` ${jobRole}`)
                .font(config_1.dev ? "Archivo-Bold.ttf" : "server/Archivo-Bold.ttf")
                .text(company);
            taskArray.forEach((element) => {
                doc.text(`• ${element}`, mmToPtX(positionXmm + 2));
            });
        };
        console.log("errormeasure3");
        jobCreation("01/16-07/22", "Founder and Manager", "Yourgreenphone, Berlin", [
            "managing of 7 Employees",
            "Head of technical department",
            "Performing repairs",
            "Managing Projects",
        ], 85);
        jobCreation("01/15-08/15", "Customer Service agent", "Sony, Berlin", ["Technical support"], 115);
        jobCreation("01/09-04/15", "Snowboard instructor", "Skool Max, Splinderuv Mlyn", [
            "Teaching snowboarding",
            "Teaching Skying",
            "prepare slope for training",
            "promoting new customers",
        ], 135);
        jobCreation("05/09-08/15", "Promoter/ Entertainer", "Party Crew, Nesebar Bulgaria", [
            "Promoting a group of clubs",
            "Entertaining guests",
            "Doing administrative tasks",
        ], 165);
        jobCreation("01-06-03-09", "Teamlead Face to face Marketing", "Emolife Netherlands Nationwide", ["Selling Charity contracts Face to face", "Training new employees"], 195);
        let baseLineX = 85;
        let baseLineY = 75;
        console.log("errormeasure4");
        doc
            .fontSize(mFont)
            .text(`WORKING EXPERIENCE`, mmToPtX(baseLineX), mmToPtY(baseLineY));
        baseLineY = baseLineY + 10;
        doc
            .fontSize(sFont)
            .font(config_1.dev ? "Archivo-SuperBold.ttf" : "server/Archivo-SuperBold.ttf")
            .text(`Projects:`, mmToPtX(baseLineX), mmToPtY(baseLineY + 130))
            .font(config_1.dev ? "Archivo-Bold.ttf" : "server/Archivo-Bold.ttf")
            .text(`Bottle Luminous`)
            .text(`Party Store records`)
            .text(`Berlin Bikeroutes`)
            .text("Peronalized Resume generator");
        baseLineY = baseLineY + 10;
        doc
            .fontSize(mFont)
            .text(`EDUCATION`, mmToPtX(baseLineX), mmToPtY(baseLineY + 150));
        doc
            .fontSize(sFont)
            .text(`02/22-07/22 Code Academy Berlin 840Hours JavaScript + Scrum`, mmToPtX(baseLineX), mmToPtY(baseLineY + 160));
        doc
            .fontSize(sFont)
            .text(`06-09 IT Rijn ijssel College level 4 Arnhem`, mmToPtX(baseLineX), mmToPtY(baseLineY + 165));
        doc
            .fontSize(sFont)
            .text(`00-05 Groene Driehoek atheneum`, mmToPtX(baseLineX), mmToPtY(baseLineY + 170));
        doc
            .fontSize(mFont)
            .text(`WHAT CAN I BRING TO YOUR COMPANY`, mmToPtX(baseLineX), mmToPtY(baseLineY + 180), {
            width: mmToPtX(150),
            align: "left",
        });
        doc
            .fontSize(sFont)
            .text(`Front-end development, Back-end development, Android testing, Debugging, Code maintenance,  Automation Script writing, `, mmToPtX(baseLineX), mmToPtY(baseLineY + 187), {
            width: mmToPtX(130),
            align: "left",
        });
        console.log("errormeasure5");
        doc.end();
        const stream = yield doc.pipe(blobStream());
        console.log(stream);
        yield doc.pipe(fs.createWriteStream(config_1.dev
            ? `CVSvenDudink${companyName}.pdf`
            : `server/CVSvenDudink${companyName}.pdf`));
        console.log("finalized");
        return "finished";
    }
    catch (error) {
        console.log("error", error);
    }
});
exports.default = docCreator;
