import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import {readdirSync} from "fs";

const morgan = require("morgan");
require('dotenv').config();

const app = express();

mongoose
    .connect(process.env.DATABASE)
    .then(() => console.log('mongoDB connected...'))
    .catch(err => {
        console.log(err)
    });

// middlewares
app.use(express.json({limit: "5mb"}));
app.use(cors({
    origin: [process.env.CLIENT_URL]
}));

// autoload routes
app.get('/api/register', (req, res) => {
    res.send("Hey you reached node sever");
});

// listen
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});
