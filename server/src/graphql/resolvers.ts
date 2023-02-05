// Import
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";
import User from "../models/User";
import docCreator from "../Helper/CvGenerator";
import fs from "fs";
import axios from "axios";
import { decodeToken } from "../utils/jwt.js";
import { betterSetTimeOut } from "../utils/betterSetTimout";
import { dev } from "../config/config";
import { logoColorUpload } from "../controller/coloredFileUpload";

let preFix = "server/";
if (dev) {
  preFix = "";
}

const convertBase64 = (path) => {
  // read binary data from file
  const bitmap = fs.readFileSync(path);
  // convert the binary data to base64 encoded string
  return bitmap.toString("base64");
};

const createUser = async function ({ userInput }: any) {
  const errors = [];
  console.log("checkfistentry", userInput);

  const user = new User({
    emailAdress: userInput.emailAdress,
    companyLogo: userInput.companyLogo,
    aboutCompany: userInput.aboutCompany,
    companyName: userInput.companyName,
    phoneNumber: userInput.phoneNumber,
    recruiterName: userInput.recruiterName,
    webColor1: userInput.webColor1,
    webColor2: userInput.webColor2,
    webColor3: userInput.webColor3,
  });

  if (errors.length > 0) {
    const error = new Error("invalid input");
    error.data = errors;
    error.code = 422;
    throw error;
  }
  const createdUser = await user.save();
  let token = "";
  if (userInput.companyName) {
    token = jwt.sign(
      {
        i: createdUser.id.toString(),
      },
      "TTS1T",
      { algorithm: "HS256", noTimestamp: true }
    );
    console.log("checkTooken", token);
    // "process.env.SECRET_JWTyesiknowthisdoesnotworkbutatleastnowitsaveryhardkeytoguessifyoudontbelievemegiveitatrycloseyoureyesthinkofsomethingandifitisexactlythisstringiwillgiveyou2euro50andiwillbuyyouasnickers"
    await sendEmail(
      userInput.emailAdress,
      userInput.recruiterName,
      userInput.companyName,
      userInput.aboutCompany,
      createdUser.id,
      token,
      userInput.webColor1,
      userInput.webColor2,
      userInput.webColor3,
      userInput.companyLogo
    );
  }
  logoColorUpload(userInput.webColor3);
  await betterSetTimeOut(1500);
  console.log("checkifwaited");
  return {
    token: token.toString(),
    fileName: `Resume Sven Dudink for ${userInput.companyName}`,
    file: convertBase64(
      `${preFix}src/createdcvs/CVSvenDudink${userInput.companyName}.pdf`
    ),
    ...createdUser._doc,
    _id: createdUser.id.toString(),
  };
};

const login = async (req, res) => {
  console.log(req.token);
  const message: any = await decodeToken(req.token);
  console.log("message", message.userId);
  const nonsense = message.userId.slice(0, message.userId.length - 10);
  console.log("tell me more nonsense", nonsense);
  const user = await User.findOne({
    _id: message.userId,
  });

  // .findOne({
  //   _id: { $regex: message.userId },
  // });
  console.log(user);
  return {
    companyLogo: user.companyLogo,
    aboutCompany: user.aboutCompany,
    companyName: user.companyName,
    phoneNumber: user.phoneNumber,
    recruiterName: user.recruiterName,
    webColor1: user.webColor1,
    webColor2: user.webColor2,
    webColor3: user.webColor3,
  };
};

const sendEmail = async (
  email,
  name,
  companyName,
  aboutCompany,
  id,
  token,
  hashColor,
  hashColor2,
  webColor3,
  companyLogo
) => {
  console.log("vlad", companyLogo);
  const params = await infoExtractor(
    companyName,
    aboutCompany,
    companyLogo,
    hashColor
  );

  await docCreator(
    name,
    companyName,
    params.hex,
    hashColor2,
    params.fileName,
    id,
    token
  );
  console.log(email, name, companyName, aboutCompany, id, token);
  return;
};

const infoExtractor = async (
  companyName: any,
  companyAdress: any,
  companyLogo,
  ownHex
) => {
  if (companyLogo !== "undefined") {
    async function download(url, fileName) {
      const response = await axios({
        url,
        method: "GET",
        responseType: "stream",
      });
      return new Promise((resolve, reject) => {
        response.data
          .pipe(fs.createWriteStream(`${preFix}src/companylogos/${fileName}`))
          .on("error", reject)
          .once("close", () => resolve(fileName));
      });
    }

    let fileName = `brand${companyLogo
      .slice(-4)
      .replace("/", "x")
      .replace(".", "x")}`;
    console.log(companyLogo);
    await download(companyLogo, fileName);

    return { hex: ownHex, fileName: fileName };
  }
};

const graphqlResolver = {
  createUser: createUser,
  login: login,
};

export { graphqlResolver };
