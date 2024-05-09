import bcrypt from "bcrypt";
import {Instructor} from "../models/InstructorModel.js";
import { adminToken } from "../utils/generateToken.js";

// get courses

export const getCourses = async (req, res) => {
    const courses = await Course.find();
    res.send(courses);
};


// create courses

export const createCourse = async (req, res) => {
    try {
      console.log("hitted");
      if(!req.file) {
      return res.send("file is not visible")
      }
      cloudinaryInstance.uploader.upload(req.file.path, async (err, result) => {
        if (err) {
          console.log(err, "error");
          return res.status(500).json({
            success: false,
            message: "Error",
          });
        }
        
        const imageUrl = result.url;
        const body = req.body;
        console.log(body, "body");
  
        const { title, description, price, instructorEmail } = body;
  
        const findInstructor = await Instructor.findOne({ email: instructorEmail });
  
        if (!findInstructor) {
          return res.send("please add instructor first");
        }
  
        const createCourse = new Course({
          title,
          description,
          price,
          instructor: findInstructor._id,
          image: imageUrl,
        });
        
        
        const newCourseCreated = await createCourse.save();
        if (!newCourseCreated) {
          return res.send("course is not created");
        }
        return res.send(newCourseCreated);
      });
    } catch (error) {
      console.log("something went wrong", error);
      res.send("failed to create course");
    }
};