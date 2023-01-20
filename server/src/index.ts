/////////////////////////////////////////Sven's//Coding////////////////////////////////
// Startpoint Nodejs Server
/////////////////////////////////////////gnidoC//s'nevS////////////////////////////////

//Imports
import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { graphqlResolver } from "./graphql/resolvers";
import graphqlSchema from "./graphql/schemas";
import { graphqlHTTP } from "express-graphql";

let corsOptions = {
  origin: process.env.ORIGINS,
};

// Initial values
const app = express();
dotenv.config();
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Connect to mongo
(async function () {
  try {
    await mongoose.connect(<string>process.env.MONGO_LOGIN);
    console.log("Connection established with mongo");
  } catch (error) {
    console.log("DB error", error);
  }
})();

// Listen to port
app.listen(process.env.PORT, () => {
  console.log(`server running on port: ${process.env.PORT}`);
});

// GraphQL Route
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
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
  })
);
