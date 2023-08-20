import { Router } from "express";
import GetClienteController from './controllers/getClienteController.js'

const router = Router()

router.get(
   "/cliente/:id", 
   new GetClienteController().handle
)

export { router }