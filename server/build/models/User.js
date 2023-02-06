"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    emailAdress: {
        type: String,
        required: false,
    },
    companyLogo: {
        type: String,
        required: false,
    },
    aboutCompany: {
        type: String,
        required: false,
    },
    companyName: {
        type: String,
        required: false,
    },
    phoneNumber: {
        type: String,
        required: false,
    },
    recruiterName: {
        type: String,
        required: false,
    },
    webColor1: {
        type: String,
        required: false,
    },
    webColor2: {
        type: String,
        required: false,
    },
    webColor3: {
        type: String,
        required: false,
    },
    posts: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
});
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
