import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import client from "./db.js"
import taskRoute from "./routes/taskRoute.js";

dotenv.configDotenv()

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('tiny'))

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
})

client.connect()
    .then(() => {
        console.log("Connected to the database");
    }).catch((err) => {
    console.log('Connection error', err.stack);
})

app.use('/api/tasks', taskRoute);

