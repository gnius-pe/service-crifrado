import express from "express";
import morgan from "morgan";
import escitala from "./routes/escitala.routes.js";
import polvios from "./routes/polvios.routes.js";
import { swagggerJSDocs } from "./libs/swagger.js";


const app = express();

// app use
app.use(morgan('dev'));
app.use('/api',escitala);
app.use('/api',polvios);
swagggerJSDocs(app,3030);


export default app;