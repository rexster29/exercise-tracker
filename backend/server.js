const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
const URI = String(process.env.MONGO_URI);

mongoose.connect(URI)
.then(() => {
    console.log(`MongoDB connected successfully!!`);
})
.catch((err) => {
    console.log(err)
})

const exerciseRouter = require("./routes/exercise.routes");
const userRouter = require("./routes/user.routes");

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})