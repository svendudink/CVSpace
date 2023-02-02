// Imports
import jsonwebtoken from "jsonwebtoken";

const decodeToken = async (token) => {
  const secretKeys = [
    "process.env.SECRET_JWTyesiknowthisdoesnotworkbutatleastnowitsaveryhardkeytoguessifyoudontbelievemegiveitatrycloseyoureyesthinkofsomethingandifitisexactlythisstringiwillgiveyou2euro50andiwillbuyyouasnickers",
    "TTS1T",
  ];

  let decoded = "";
  for (const secretKey of secretKeys) {
    try {
      decoded = jsonwebtoken.verify(token, secretKey);
      console.log(secretKey);
      break;
    } catch (error) {
      continue;
    }
  }
  console.log("jwtmechanism", decoded);
  if (decoded.i) {
    decoded = { userId: decoded.i };
    console.log("works");
  }

  return decoded;
};

export { decodeToken };
