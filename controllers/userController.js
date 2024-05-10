import bcrypt from "bcrypt";
import {generateToken} from "../utils/generateToken.js"
import User from "../models/userModel.js";

export const signup = async ( req, res) => {

    console.log("Hitted");
    try {
        console.log(req.body);
        const {firstName , lastName, password, email} = req.body;
        const userExist = await User.findOne({ email});
        console.log(userExist)

        if(userExist){
            return res.send("user already exist");
        }


        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            email,
            firstName,
            lastName,
            hashPassword,
        });
    
        console.log(newUser);

        const newUserCreated = await newUser.save();

        console.log(newUserCreated);

        if(!newUserCreated) {
            return res.send(" user not found")
        }

        const token = generateToken(email);
        // res.send(token);

        res.cookie("token", token)
        res.send("Signed Successfully");

        
    } catch (error) {
        console.log(error, "Somthing wrong");
        res.status(500).send("Internal Server Error");
    }
}; 

// signin started

export const signin = async (req, res) => {
    try {
        const { email, password} = req.body;

        const user = await User.findOne({ email});

        console.log(user);

        if (!user){
            return res.send("user not exist")
        }

        const matchPassword = await bcrypt.compare(password, user.hashPassword);

        if (!matchPassword) {
            return res.send("password incorrect");
        }
        

        const token = generateToken(email);
        res.cookie("token", token);
        res.send("Logged in!");
        
    } catch (error) {
        console.log(error, "Somthing wrong");
        res.status(500).send("Internal Server Error");
    }
    

};

