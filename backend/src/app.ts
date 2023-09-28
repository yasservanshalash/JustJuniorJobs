// create server here
import Express from 'express'; // express library
import bodyParser from 'body-parser'; // library to get data from body
import jobRouter from './routes/jobs'; // Import the job router

const app = Express(); // initiate app
 
app.use(Express.json()); // use json middleware to get data win json
app.use('/jobs', jobRouter); // Use the job router

export default app; 