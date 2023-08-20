import { Router } from "express";
import GetRespostaController from "./controllers/getRespostaController.js";

const router = Router()

router.post(
   "/perguntar", 
   new GetRespostaController().handle
)

export { router }