/* 
    Schema dos dados para criar os registros no banco 
*/

import mongoose from "mongoose";
import Inc  from "mongoose-sequence"

const AutoIncrement = Inc(mongoose); 

const assistenciaSchema = new mongoose.Schema(
    {
        id: {type: String},
        order: {type: Number},
        nomeTecnico: {type: String, require: true},
        setorAtendimeneto: {type: String, require: true},
        tipoDeAtendimento: {type: String, require: true},
        classificacaoDeAssistencia: {type: String, require: true},
        motivoDaAssistencia: {type: String, require: true},
        reclamacaoCliente: {type: String, require: true},
        observacao: {type: String, require: true},
        dataEHora: {type: String},
        status: {type: String},
    }
);

/* Auto increment valor para o schema */
assistenciaSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: 'order'});

const assistencias = mongoose.model('registroAssistencias', assistenciaSchema)

export default assistencias;