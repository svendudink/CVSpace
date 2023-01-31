"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.default = (0, graphql_1.buildSchema)(`



type User {
   emailAdress: String
    companyLogo: String
    aboutCompany: String
    companyName: String
    phoneNumber: String
    recruiterName: String
    webColor1: String
    webColor2: String
    id: String
    token: String
    file: String
    fileName: String
}

type AuthData {
    token: String!
    userId: String!
}

input UserInputData {
    emailAdress: String
    companyLogo: String
    aboutCompany: String
    companyName: String
    phoneNumber: String
    recruiterName: String
    webColor1: String
    webColor2: String
    id: String
    token: String
}




type RootMutation {
    createUser(userInput: UserInputData): User!
}

type rootQuery {
    login(token: String): User
}


    schema {
        query: rootQuery
  mutation: RootMutation

}`);
