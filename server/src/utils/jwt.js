// Imports
import jsonwebtoken from "jsonwebtoken";

const decodeToken = async (token) => {
  let secret = "";
  jsonwebtoken.verify(
    token,
    "process.env.SECRET_JWTyesiknowthisdoesnotworkbutatleastnowitsaveryhardkeytoguessifyoudontbelievemegiveitatrycloseyoureyesthinkofsomethingandifitisexactlythisstringiwillgiveyou2euro50andiwillbuyyouasnickers",
    async function (err, decoded) {
      if (err) {
        return { error: "invalid signature" };
      }
      secret = decoded;
    }
  );
  return secret;
};

export { decodeToken };
