// const express = require('express')
import express from 'express';
const app =   express();
import { connectDb } from '../config/db.js';
import userRouter from '../routes/userRouter.js';
import cookieParser from 'cookie-parser';


app.use(cookieParser());
app.use(express.json());
app.use("/api/v1", userRouter);

const port = 3000;
connectDb();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});