import express from "express";
import morgan from "morgan";
import escitala from "./routes/escitala.routes.js";
import polybius from "./routes/polybius.routes.js";
import { swagggerJSDocs } from "./libs/swagger.js";


const app = express();

// app use
app.use(morgan('dev'));
app.use('/api',escitala);
app.use('/api',polybius);
swagggerJSDocs(app,3030);


export default app;