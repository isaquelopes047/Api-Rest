import express from "express";
import assistenciaController from "../controllers/assistenciasControllers.js";
import cors from 'cors'

const router = express.Router();

/* Liberar CORS */
router.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    origin: '*',
}));

router
    .get('/assistencias', assistenciaController.listarAssistencias)
    .get('/assistencias/:id', assistenciaController.listarAssistenciaPorId)
    .post('/assistencias', assistenciaController.cadastrarAssistencia)
    .put('/assistencias/:id', assistenciaController.atualizarAssistencia)
    .delete('/assistencias/:id', assistenciaController.excluirAssistencia)

export default router;