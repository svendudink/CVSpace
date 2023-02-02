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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlResolver = void 0;
// Import
const bcrypt_1 = __importDefault(require("bcrypt"));
const validator_1 = __importDefault(require("validator"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
const CvGenerator_1 = __importDefault(require("../Helper/CvGenerator"));
const fs_1 = __importDefault(require("fs"));
const axios_1 = __importDefault(require("axios"));
const jwt_js_1 = require("../utils/jwt.js");
const betterSetTimout_1 = require("../utils/betterSetTimout");
const config_1 = require("../config/config");
const convertBase64 = (path) => {
    // read binary data from file
    const bitmap = fs_1.default.readFileSync(path);
    // convert the binary data to base64 encoded string
    return bitmap.toString("base64");
};
const createUser = function ({ userInput }) {
    return __awaiter(this, void 0, void 0, function* () {
        const errors = [];
        if (!validator_1.default.isEmail(userInput.emailAdress)) {
            errors.push({
                message: "email Adress is invalid",
            });
        }
        console.log("test");
        const hashedPw = yield bcrypt_1.default.hash("0000", 12);
        const user = new User_1.default({
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
        const createdUser = yield user.save();
        let token = "";
        if (userInput.companyName) {
            token = jsonwebtoken_1.default.sign({
                i: createdUser.id.toString(),
            }, "TTS1T", { algorithm: "HS256", noTimestamp: true });
            console.log("checkTooken", token);
            // "process.env.SECRET_JWTyesiknowthisdoesnotworkbutatleastnowitsaveryhardkeytoguessifyoudontbelievemegiveitatrycloseyoureyesthinkofsomethingandifitisexactlythisstringiwillgiveyou2euro50andiwillbuyyouasnickers"
            yield sendEmail(userInput.emailAdress, userInput.recruiterName, userInput.companyName, userInput.aboutCompany, createdUser.id, token, userInput.webColor1, userInput.webColor2, userInput.companyLogo);
        }
        return Object.assign(Object.assign({ token: token.toString(), fileName: `Resume Sven Dudink for ${userInput.companyName}`, file: convertBase64(config_1.dev
                ? `CVSvenDudink${userInput.companyName}.pdf`
                : `server/CVSvenDudink${userInput.companyName}.pdf`) }, createdUser._doc), { _id: createdUser.id.toString() });
    });
};
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.token);
    const message = yield (0, jwt_js_1.decodeToken)(req.token);
    console.log("message", message.userId);
    const nonsense = message.userId.slice(0, message.userId.length - 10);
    console.log("tell me more nonsense", nonsense);
    const user = yield User_1.default.findOne({
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
    };
});
const sendEmail = (email, name, companyName, aboutCompany, id, token, hashColor, hashColor2, companyLogo) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("vlad", companyLogo);
    const params = yield infoExtractor(companyName, aboutCompany, companyLogo, hashColor);
    yield (0, CvGenerator_1.default)(name, companyName, params.hex, hashColor2, params.fileName, id, token);
    console.log(email, name, companyName, aboutCompany, id, token);
});
const infoExtractor = (companyName, companyAdress, companyLogo, ownHex) => __awaiter(void 0, void 0, void 0, function* () {
    if (companyLogo !== "undefined") {
        function download(url, fileName) {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield (0, axios_1.default)({
                    url,
                    method: "GET",
                    responseType: "stream",
                });
                return new Promise((resolve, reject) => {
                    response.data
                        .pipe(fs_1.default.createWriteStream(config_1.dev ? `${fileName}` : `server/${fileName}`))
                        .on("error", reject)
                        .once("close", () => resolve(fileName));
                });
            });
        }
        let fileName = `brand${companyLogo
            .slice(-4)
            .replace("/", "x")
            .replace(".", "x")}`;
        console.log(companyLogo);
        download(companyLogo, fileName);
        yield (0, betterSetTimout_1.betterSetTimeOut)(3000);
        return { hex: ownHex, fileName: fileName };
    }
});
const graphqlResolver = {
    createUser: createUser,
    login: login,
};
exports.graphqlResolver = graphqlResolver;
