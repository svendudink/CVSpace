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
import { fileLoaded } from "./config/config";
import fs from "fs";
import { preFix } from "./config/config";

let corsOptions = {
  origin: "*",
  credentials: true,
};
const app = express();
app.use(bodyParser.json());
console.log("loaded envirnoment:", fileLoaded);

// Initial values
dotenv.config();
app.use(cors(corsOptions));

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
app.listen(8080, () => {
  console.log(`server running on  xxx port: ${8080}`);
});
console.log(preFix);
if (fs.existsSync(`${preFix}src/logos/`)) {
  console.log("true about source");
} else {
  console.log("false about source");
}
if (fs.existsSync(`${preFix}logos/`)) {
  console.log("true about source");
  console.log("prefix:", preFix);
} else {
  console.log("false about source");
}
if (fs.existsSync(`${preFix}src/logos/`)) {
  console.log("true about source");
} else {
  console.log("false about source");
}
if (fs.existsSync(`src/logos/`)) {
  console.log("true about source");
} else {
  console.log("false about source");
}
if (fs.existsSync(`src/logos/`)) {
  console.log("true about source");
} else {
  console.log("false about source");
}
if (fs.existsSync(`src/logos/`)) {
  console.log("true about source");
} else {
  console.log("false about source");
}
if (fs.existsSync(`logos/`)) {
  console.log("true about source");
  console.log("prefix:", preFix);
} else {
  console.log("false about source");
}
if (fs.existsSync(`/src/logos/`)) {
  console.log("true about source");
} else {
  console.log("false about source");
}
if (fs.existsSync(`src/logos/`)) {
  console.log("true about source");
} else {
  console.log("false about source");
}
if (fs.existsSync(`server/src/logos/`)) {
  console.log("true about source");
} else {
  console.log("false about source");
}
if (fs.existsSync(`./logos/Archivo-Bold.ttf`)) {
  console.log("nailed it1");
} else {
  console.log("fail");
}
if (fs.existsSync(`./Archivo-Bold.ttf`)) {
  console.log("nailed it2");
} else {
  console.log("fail");
}
if (fs.existsSync(`/logos/Archivo-Bold.ttf`)) {
  console.log("nailed it3");
} else {
  console.log("fail");
}
if (fs.existsSync(`logos/Archivo-Bold.ttf`)) {
  console.log("nailed it4");
} else {
  console.log("fail");
}
if (fs.existsSync(`/Archivo-Bold.ttf`)) {
  console.log("nailed it5");
} else {
  console.log("fail");
}
if (fs.existsSync(`app/server/Archivo-Bold.ttf`)) {
  console.log("nailed it6");
} else {
  console.log("fail");
}
if (fs.existsSync(`/app/server/Archivo-Bold.ttf`)) {
  console.log("nailed it7");
} else {
  console.log("fail");
}
if (fs.existsSync(`./app/server/Archivo-Bold.ttf`)) {
  console.log("nailed it8");
} else {
  console.log("fail");
}
if (fs.existsSync(`app/server/Archivo-Bold.ttf`)) {
  console.log("nailed it9");
} else {
  console.log("fail");
}
if (fs.existsSync(`/server/Archivo-Bold.ttf`)) {
  console.log("nailed it10");
} else {
  console.log("fail");
}
if (fs.existsSync(`./server/Archivo-Bold.ttf`)) {
  console.log("nailed it11");
} else {
  console.log("fail");
}
if (fs.existsSync(`server/Archivo-Bold.ttf`)) {
  console.log("nailed it12");
} else {
  console.log("fail");
}
if (fs.existsSync(`build/Archivo-Bold.ttf`)) {
  console.log("nailed it13");
} else {
  console.log("fail");
}
if (fs.existsSync(`/build/Archivo-Bold.ttf`)) {
  console.log("nailed it14");
} else {
  console.log("fail");
}
if (fs.existsSync(`./build/Archivo-Bold.ttf`)) {
  console.log("nailed it15");
} else {
  console.log("fail");
}
if (fs.existsSync(`../build/Archivo-Bold.ttf`)) {
  console.log("nailed it16");
} else {
  console.log("fail");
}

console.log("preFix", preFix);

// image server
app.use(express.static("public"));
app.use("/images", express.static(`${preFix}src/logos/`));

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
