"use strict";
/////////////////////////////////////////Sven's//Coding////////////////////////////////
// Startpoint Nodejs Server
/////////////////////////////////////////gnidoC//s'nevS////////////////////////////////
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
//Imports
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const resolvers_1 = require("./graphql/resolvers");
const schemas_1 = __importDefault(require("./graphql/schemas"));
const express_graphql_1 = require("express-graphql");
const config_1 = require("./config/config");
const fs_1 = __importDefault(require("fs"));
const config_2 = require("./config/config");
let corsOptions = {
    origin: "*",
    credentials: true,
};
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
console.log("loaded envirnoment:", config_1.fileLoaded);
// Initial values
dotenv.config();
app.use((0, cors_1.default)(corsOptions));
// Connect to mongo
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(process.env.MONGO_LOGIN);
            console.log("Connection established with mongo");
        }
        catch (error) {
            console.log("DB error", error);
        }
    });
})();
// Listen to port
app.listen(8080, () => {
    console.log(`server running on  xxx port: ${8080}`);
});
console.log(config_2.preFix);
if (fs_1.default.existsSync(`${config_2.preFix}src/logos/`)) {
    console.log("true about source");
}
else {
    console.log("false about source");
}
if (fs_1.default.existsSync(`${config_2.preFix}logos/`)) {
    console.log("true about source");
    console.log("prefix:", config_2.preFix);
}
else {
    console.log("false about source");
}
if (fs_1.default.existsSync(`${config_2.preFix}src/logos/`)) {
    console.log("true about source");
}
else {
    console.log("false about source");
}
if (fs_1.default.existsSync(`src/logos/`)) {
    console.log("true about source");
}
else {
    console.log("false about source");
}
if (fs_1.default.existsSync(`src/logos/`)) {
    console.log("true about source");
}
else {
    console.log("false about source");
}
if (fs_1.default.existsSync(`src/logos/`)) {
    console.log("true about source");
}
else {
    console.log("false about source");
}
if (fs_1.default.existsSync(`logos/`)) {
    console.log("true about source");
    console.log("prefix:", config_2.preFix);
}
else {
    console.log("false about source");
}
if (fs_1.default.existsSync(`/src/logos/`)) {
    console.log("true about source");
}
else {
    console.log("false about source");
}
if (fs_1.default.existsSync(`src/logos/`)) {
    console.log("true about source");
}
else {
    console.log("false about source");
}
if (fs_1.default.existsSync(`server/src/logos/`)) {
    console.log("true about source");
}
else {
    console.log("false about source");
}
if (fs_1.default.existsSync(`./logos/Archivo-Bold.ttf`)) {
    console.log("nailed it1");
}
else {
    console.log("fail");
}
if (fs_1.default.existsSync(`./Archivo-Bold.ttf`)) {
    console.log("nailed it2");
}
else {
    console.log("fail");
}
if (fs_1.default.existsSync(`/logos/Archivo-Bold.ttf`)) {
    console.log("nailed it3");
}
else {
    console.log("fail");
}
if (fs_1.default.existsSync(`logos/Archivo-Bold.ttf`)) {
    console.log("nailed it4");
}
else {
    console.log("fail");
}
if (fs_1.default.existsSync(`/Archivo-Bold.ttf`)) {
    console.log("nailed it5");
}
else {
    console.log("fail");
}
if (fs_1.default.existsSync(`app/server/Archivo-Bold.ttf`)) {
    console.log("nailed it6");
}
else {
    console.log("fail");
}
if (fs_1.default.existsSync(`/app/server/Archivo-Bold.ttf`)) {
    console.log("nailed it7");
}
else {
    console.log("fail");
}
if (fs_1.default.existsSync(`./app/server/Archivo-Bold.ttf`)) {
    console.log("nailed it8");
}
else {
    console.log("fail");
}
if (fs_1.default.existsSync(`app/server/Archivo-Bold.ttf`)) {
    console.log("nailed it9");
}
else {
    console.log("fail");
}
if (fs_1.default.existsSync(`/server/Archivo-Bold.ttf`)) {
    console.log("nailed it10");
}
else {
    console.log("fail");
}
if (fs_1.default.existsSync(`./server/Archivo-Bold.ttf`)) {
    console.log("nailed it11");
}
else {
    console.log("fail");
}
if (fs_1.default.existsSync(`server/Archivo-Bold.ttf`)) {
    console.log("nailed it12");
}
else {
    console.log("fail");
}
if (fs_1.default.existsSync(`build/Archivo-Bold.ttf`)) {
    console.log("nailed it13");
}
else {
    console.log("fail");
}
if (fs_1.default.existsSync(`/build/Archivo-Bold.ttf`)) {
    console.log("nailed it14");
}
else {
    console.log("fail");
}
if (fs_1.default.existsSync(`./build/Archivo-Bold.ttf`)) {
    console.log("nailed it15");
}
else {
    console.log("fail");
}
if (fs_1.default.existsSync(`../build/Archivo-Bold.ttf`)) {
    console.log("nailed it16");
}
else {
    console.log("fail");
}
console.log("preFix", config_2.preFix);
// image server
app.use(express_1.default.static("public"));
app.use("/images", express_1.default.static(`${config_2.preFix}src/logos/`));
// GraphQL Route
app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
    schema: schemas_1.default,
    rootValue: resolvers_1.graphqlResolver,
    graphiql: true,
    formatError(err) {
        if (!err.originalError) {
            return err;
        }
        const data = err.originalError;
        const message = err.message || "an error occured";
        const code = err.originalError || 500;
        return { message: message, status: code, data: data };
    },
}));
