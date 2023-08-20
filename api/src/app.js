import express from "express";
import http from "http"
import cors from "cors"
import { router } from "./routes.js"
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from'./../swagger.json' assert { type: "json" };
import * as dotenv from 'dotenv'

dotenv.config()

const app = express()
const serverHttp = http.createServer(app)

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors())
app.use(express.json({limit: '100mb', extended: true}));
app.use(express.urlencoded({limit: '100mb', extended: true}));
app.use(router)

export { serverHttp }