import express from "express";
import { signup, signin } from "../controllers/userController.js";
import authenticateUser from "../middlewares/user-middleware.js";
import User from "../models/userModel.js";



const userRouter = express.Router();


userRouter.get("/check-user", authenticateUser, async (req, res) => {
    const user = req.user;

    console.log("data", user.data);

    const findUser = await User.findOne({email: user.data});
    
    if(!findUser){
        return res.json({message: "authentication failed", success: false});
    }
    res.json({message: "authenticateUser", success: true});
});
userRouter.get("/", (req, res) => {
    res.send("user route");
});

userRouter.post("/signup",  signup);
 
userRouter.post("/signin", signin);

export default userRouter;