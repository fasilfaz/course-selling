// import express from 'express';
// import dotenv from "dotenv";
// import crypto from "crypto";
// import Payment from "../models/pymentModel.js";
// import instance from '../config/payment.js';

// dotenv.config();

// const paymentRouter = express.Router();

// paymentRouter.post("/order", (req, res) => {
//     const {amount} = req.body;

//     try {
//         const options = {
//             amount: Nummber(amount * 100),
//             currency: "INR",
//             receipt: crypto.randomBytes(10).toString("hex"),
//         };
//         instance.orders.create(options, (err, order) => {
//             if(err){
//                 console.log(err);
//                 return res.status(500).json({
//                     success: false,
//                     message: "Error",
//                 });
//             }
//             res.status(200).json({
//                 success: true,
//                 data: order,
//             });
//         });
//     } catch (error) {
//         res.status(200).json({ message: "Internal Server Error"});
//         console.log(error);
//     }
// });

// paymentRouter.post("/verify", async (req, res) => {
 
//     console.log("verify hitted");

//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
//     console.log("req.body", req.body);

//     try {
//         const sign = razorpay_order_id + "|" + razorpay_payment_id;

//         const expectedSign = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET || "s")
//         .update(sign.toString()).digest("hex");

//         const isAuthentic = expectedSign === razorpay_signature;
//     console.log(isAuthentic);

//     if (isAuthentic) {
//       const payment = new Payment({
//         razorpay_order_id,
//         razorpay_payment_id,
//         razorpay_signature,
//       });

//       await payment.save();

//       res.json({
//         message: "Payement Successfully",
//       });
//     }
//     } catch (error) {
//         res.status(500).json({ message: "Internal Server Error!" });
//     console.log(error);
//     }
// });

// export default paymentRouter;