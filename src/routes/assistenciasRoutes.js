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
    .get('/assistencias/busca', assistenciaController.listarPorFuncionario)
    .get('/assistencias/lista', assistenciaController.listarPorOrder)
    .get('/assistencias/listarProblema', assistenciaController.listarProblemaIdentificado)
    .get('/assistencias/listaData', assistenciaController.listarPorData)

    .patch('/assistencias/alterar', assistenciaController.alterarAssistenciaOrder)
    .delete('/assistencias/listaDelete', assistenciaController.deletaAssistenciaOrder)

    .get('/assistencias/:id', assistenciaController.listarAssistenciaPorId)

    .post('/assistencias', assistenciaController.cadastrarAssistencia)
    .put('/assistencias/:id', assistenciaController.atualizarAssistencia)
    .delete('/assistencias/:id', assistenciaController.excluirAssistencia)

export default router;