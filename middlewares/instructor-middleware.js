import jsonwebToken from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function authenticateInstructor(req, res, next) {
  const token = req.cookies.token;

  jsonwebToken.verify(token, process.env.SE, (err, user) => {
    console.log(err);

    if (err) return res.send("Token not valid or missing").Status(403);

    req.user = user;
    console.log(req.user.role)
    if (req.user.role !== "instructor" && req.user.role !== "admin") {
      return res.send("not authenticated");
    }
    next();
  });
}

export default authenticateInstructor;