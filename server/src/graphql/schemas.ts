import { buildSchema } from "graphql";

export default buildSchema(`



type User {
    _id: ID
    emailAdress: String!
    password: String
    aboutCompany: String
    companyName: String
    phoneNumber: String
    yourName: String
    token: String!
}

type AuthData {
    token: String!
    userId: String!
}

input UserInputData {
    emailAdress: String!
    password: String!
    aboutCompany: String
    companyName: String
    phoneNumber: String
    yourName: String
    logoLink: String
    hashColor: String
}

type ReturnData {
    notDefined: String
    mapArray: String
    bulbIdList: String
    eventList: String
    availableBulbIdList: String
}

input SetValuesData {
    sendToAndroid: String
    createLightFile: String
    bulbMovement: String
    bulbColours: String
    readFileFromAndroid: String
    mapping: String

}

input SetMapData {
    lat: String
    lng: String
    request: String
    bulbId: String
    bulbNumber: String
    markerList: String
    mapName: String
    brightness: String
    extended: String
    
}


type RootMutation {
    ControlDevice(SetValues: SetValuesData): ReturnData
    MapLamps(SetMap: SetMapData): ReturnData
    createUser(userInput: UserInputData): User!
}

type rootQuery {
    viewDevices(which: String): ReturnData
    login(emailAdress: String!, password:String!): AuthData!
    idLogin(id:String!, token:String): User!
}


    schema {
        query: rootQuery
  mutation: RootMutation

}`);
