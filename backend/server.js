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

// autoload routes

// listen
