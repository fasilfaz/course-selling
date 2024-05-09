import mongoose from "mongoose";


    const instructorSchema = new mongoose.Schema(
        {
          name: {
            type: String,
            required: true,
          },
          email: {
            type: String,
            required: true,
            unique: true,
          },
          role: {
            type: String,
            enum: ["instructor", "admin"],
          },
          courses: [{ type: mongoose.Types.ObjectId, ref: "Course" }],
        },
        { timestamps: true }
      );
    // firstName: {
    //     type: String,
    //     required: true,
    //     minLength: 4,
    //     maxLength: 12,
    // },
    // lastName:{
    //     type: String,
    //     required: true,
    //     minLength: 1,
    //     maxLength: 3,
    // },
    // email:{
    //     unique: true,
    //     type: String,
    //     format: email,
    //     trim: true,
    //     lowercase: true,
    //     required:true,
    //     // pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
    // },
    // password:{
    //     format: password,
    //     required:true,
    //     minLength:8,
    //     maxLength: 12,
    // },
    // contact:{
    //     type: Number,
    //     minLength:10,
    //     maxLength:10
    // }
    //     type: String,
    


const Instructor = mongoose.model("Instructor", instructorSchema);

export default Instructor;