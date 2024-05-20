import express from 'express';
import cookieParser from 'cookie-parser';
import cors from "cors";
import userRouter from '../routes/userRouter.js';
import instructorRouter from '../routes/instructorRouter.js';
import { connectDb } from '../config/db.js';
// import paymentRouter from '../routes/pyment.js';

const app =   express();

// var whitelist = ['http://localhost:5173', 'http://localhost:5000']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   },
//   Credentials: true, 
// };

app.use(
  cors({
  origin: "http://localhost:5173",
  credentials: true,
})
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/instructor",  instructorRouter);
// app.use("/api/v1/pyment", paymentRouter);


const port = 3000;
connectDb();


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});