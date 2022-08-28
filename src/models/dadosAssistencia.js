/* 
    Schema dos dados para criar os registros no banco 
*/

import mongoose from "mongoose";

const assistenciaSchema = new mongoose.Schema(
    {
        id: {type: String},
        nomeTecnico: {type: String, require: true},
        setorAtendimeneto: {type: String, require: true},
        tipoDeAtendimento: {type: String, require: true},
        classificacaoDeAssistencia: {type: String, require: true},
        motivoDaAssistencia: {type: String, require: true},
        reclamacaoCliente: {type: String, require: true},
        observacao: {type: String, require: true},
        dataEHora: {type: Date},
    }
);

const assistencias = mongoose.model('registroAssistencias', assistenciaSchema)

export default assistencias;