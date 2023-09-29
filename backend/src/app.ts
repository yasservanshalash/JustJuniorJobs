// create server here
import Express from 'express'; // express library
import multer from "multer";
import bodyParser from 'body-parser'; // library to get data from body
import jobRouter from './routes/jobs'; // Import the job router
import cors from 'cors';

const app = Express(); // initiate app
app.use(cors());
app.use(multer().single("cv"));

app.use(Express.json()); // use json middleware to get data win json
app.use('/jobs', jobRouter); // Use the job router

export default app; 