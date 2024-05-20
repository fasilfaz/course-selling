import jsonwebToken from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function authenticateInstructor(req, res, next) {
  const token = req.cookies.token;

  jsonwebToken.verify(token, process.env.SE, (err, user) => {
    console.log(err);
   console.log(token);
    if (err) {
      return res.send("Token not valid or missing").status(403)
    };

    req.instructor = user;
    console.log(req.instructorr.role)
    if (req.instructor.role !== "instructor" && req.instructor.role !== "admin") {
      return res.send("not authenticated");
    }
    next();
  });
}

export default authenticateInstructor;