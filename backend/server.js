import express from 'express';
import dotenv from 'dotenv';
import errorHandler from './middlewares/errorMiddleware.js';
import sleepRoutes from './routes/sleepRoutes.js';

// Load environment variables from a .env file into process.env
dotenv.config();

// Set the port for the server to listen on, either from an environment variable or default to 5000
const port = process.env.PORT || 5000;

// Create an instance of an Express application
const app = express();

// Middleware to parse incoming JSON requests and populate req.body with the parsed data
app.use(express.json());

// Middleware to parse incoming URL-encoded data and populate req.body with the parsed data
app.use(express.urlencoded({ extended: false }));

// Use the sleepRoutes for handling requests to /api/sleep
app.use('/api/sleep', sleepRoutes);

// Use the custom error handling middleware to handle errors
app.use(errorHandler);

// Start the server and have it listen on the specified port
app.listen(port, () => console.log(`Server is running on port ${port}`));
