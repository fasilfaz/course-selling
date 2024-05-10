import express from "express";
import 
  { getCourses,
  createCourse,
  deleteCourse,
  updateCourse }
 from "../controllers/courseController.js";
import upload from "../middlewares/upload-middleware.js";
import {
  getAllInstructors,
  singin,
  singup,
} from "../controllers/instructorController.js";
import authenticateAdmin from "../middlewares/admin-middleware.js";
import authenticateInstructor from "../middlewares/instructor-middleware.js";

const instructorRouter = express.Router();

instructorRouter.post("/signup", singup);
instructorRouter.post("/signin", singin);

instructorRouter.get("/get-courses", getCourses);
instructorRouter.get("/get-instructors", authenticateInstructor, getAllInstructors);

instructorRouter.post("/add-courses", authenticateAdmin, upload.single("image"), createCourse);

instructorRouter.put("/update-courses/:id", updateCourse);

instructorRouter.delete("/delete-instructors/:id", deleteCourse);

export default instructorRouter;