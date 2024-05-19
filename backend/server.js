import express from 'express';
import dotenv from 'dotenv';
import errorHandler from './middlewares/errorMiddleware.js';
import sleepRoutes from './routes/sleepRoutes.js'
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/sleep', sleepRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));