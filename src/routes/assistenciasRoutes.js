import express from "express";
import assistenciaController from "../controllers/assistenciasControllers.js";

const router = express.Router();

router
    .get('/assistencias', assistenciaController.listarAssistencias)

export default router;