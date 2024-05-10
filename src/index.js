import express from 'express';
import cookieParser from 'cookie-parser';
import userRouter from '../routes/userRouter.js';
import instructorRouter from '../routes/instructorRouter.js';
import { connectDb } from '../config/db.js';


const app =   express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/instructor", instructorRouter);

const port = 3000;
connectDb();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});