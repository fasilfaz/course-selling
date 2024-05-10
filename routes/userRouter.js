import express from "express";
import { signup, signin } from "../controllers/userController.js";
import authenticateUser from "../middlewares/user-middleware.js";



const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.send("user route");
});

userRouter.post("/signup", authenticateUser, signup);
 
userRouter.post("/signin", signin);

export default userRouter;