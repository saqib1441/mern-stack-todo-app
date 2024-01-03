import dotenv from "dotenv";
import { connect } from "mongoose";

// DOTENV Configuration
dotenv.config();

// Database Configuration
const URL = process.env.DATABASE_URL;

// Connection
connect(URL);
