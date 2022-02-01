// express
import express from "express";
// mongoDB
import mongoose from "mongoose";
// cors
import cors from "cors";
// .env
import dotenv from "dotenv";
// morgan
import morgan from "morgan";
// routes
import authRoutes from "./routes/auth";
import subsRoutes from "./routes/subs";

dotenv.config();
const app = express();

// mongoDB
mongoose
    .connect(process.env.DATABASE!)
    .then(() => console.log('mongoDB connected...'))
    .catch(err => {
        console.log(err)
    });

// middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({
    origin: [process.env.CLIENT_URL!]
}));

// routes
app.use('/api', authRoutes);
app.use('/api', subsRoutes);

// listen
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});
