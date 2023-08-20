import { Router } from "express";
import GetClienteController from './controllers/getClienteController.js'
import GetTrilhasClienteController from "./controllers/getTrilhasClienteController.js";

const router = Router()

router.get(
   "/cliente/:id", 
   new GetClienteController().handle
)

router.get(
   "/trilha/:id", 
   new GetTrilhasClienteController().handle
)

export { router }