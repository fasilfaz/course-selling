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
import authenticateInstructor from "../middlewares/instructor-middleware.js";

const instructorRouter = express.Router();

instructorRouter.get("/check-instructor", authenticateInstructor, async (req, res) => {

  const instructor = req.instructor;

  console.log(instructor.data);

  const findInstructor = await instructor.findById({_id: instructor.data});

  if(!findInstructor){
    return res.json({message: "authentication failed", success: false});
  }
  res.json({message: "authentication successful", success: true});

});

instructorRouter.post("/signup", singup);
instructorRouter.post("/signin", singin);

instructorRouter.get("/get-courses", getCourses);
instructorRouter.get("/get-instructors",  getAllInstructors);

instructorRouter.post("/add-courses", upload.single("image"), createCourse);

instructorRouter.put("/update-courses/:id", updateCourse);

instructorRouter.delete("/delete-instructors/:id", deleteCourse);
instructorRouter.delete("/delete-instructors/:id", deleteCourse);

export default instructorRouter;