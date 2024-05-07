const express = require('express')
const app = express()
const connectDb = require("../config/db.js")
const userRouter = require("../routes/index.js")


const port = 3000
app.use(express.json());



app.use("/api/v1", userRouter);

connectDb();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});