const jsonwebToken = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.SE;

const generateToken = (email) => {
    return jsonwebToken.sign({ data:email}, secretKey, { expiresIn :"1d"});
};

module.exports = generateToken;