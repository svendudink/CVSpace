import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";
import User from "../models/User";
import docCreator from "../Helper/CvGenerator";
import fs from "fs";
import axios from "axios";
import { decodeToken } from "../utils/jwt.js";

const createUser = async function ({ userInput }: any) {
  const errors = [];
  if (!validator.isEmail(userInput.emailAdress)) {
    errors.push({
      message: "email Adress is invalid",
    });
  }

  console.log("test");
  const hashedPw = await bcrypt.hash("0000", 12);
  const user = new User({
    emailAdress: userInput.emailAdress,
    companyLogo: userInput.companyLogo,
    aboutCompany: userInput.aboutCompany,
    companyName: userInput.companyName,
    phoneNumber: userInput.phoneNumber,
    recruiterName: userInput.recruiterName,
    webColor1: userInput.webColor1,
    webColor2: userInput.webColor2,
  });
  console.log("viewinput", userInput.hashColor, userInput.companyLogo);
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
        userId: createdUser.id.toString(),
      },
      "process.env.SECRET_JWTyesiknowthisdoesnotworkbutatleastnowitsaveryhardkeytoguessifyoudontbelievemegiveitatrycloseyoureyesthinkofsomethingandifitisexactlythisstringiwillgiveyou2euro50andiwillbuyyouasnickers",
      { expiresIn: "2000d" }
    );
    console.log("checkTooken", token);

    sendEmail(
      userInput.emailAdress,
      userInput.recruiterName,
      userInput.companyName,
      userInput.aboutCompany,
      createdUser.id,
      token,
      userInput.webColor1,
      userInput.webColor2,
      userInput.companyLogo
    );
  }

  return {
    token: token.toString(),
    ...createdUser._doc,
    _id: createdUser.id.toString(),
  };
};

const login = async (req, res) => {
  console.log(req.token);
  const message: any = await decodeToken(req.token);
  console.log("message", message.userId);
  const user = await User.findOne({
    _id: message.userId,
  });
  console.log(user);
  return {
    companyLogo: user.companyLogo,
    aboutCompany: user.aboutCompany,
    companyName: user.companyName,
    phoneNumber: user.phoneNumber,
    recruiterName: user.recruiterName,
    webColor1: user.webColor1,
    webColor2: user.webColor2,
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
};

const infoExtractor = async (
  companyName: any,
  companyAdress: any,
  companyLogo,
  ownHex
) => {
  if (companyLogo !== "undefined") {
    async function download(url, filepath) {
      const response = await axios({
        url,
        method: "GET",
        responseType: "stream",
      });
      return new Promise((resolve, reject) => {
        response.data
          .pipe(fs.createWriteStream(filepath))
          .on("error", reject)
          .once("close", () => resolve(filepath));
      });
    }

    let fileName = `brand${companyLogo
      .slice(-4)
      .replace("/", "x")
      .replace(".", "x")}`;
    console.log(companyLogo);
    download(companyLogo, fileName);

    return { hex: ownHex, fileName: fileName };
  }
};

const graphqlResolver = {
  createUser: createUser,
  login: login,
};

export { graphqlResolver };
