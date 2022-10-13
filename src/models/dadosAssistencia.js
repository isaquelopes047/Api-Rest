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
        nomeFuncionario: {type: String, require: true},
        modeloCelularAntigo: {type: String, require: true},
        numeroPatrimonioAntigo: {type: String, require: true},
        numeroDeCelularAntigo: {type: String, require: true},
        problemaIdentificado: {type: String, require: true},
        modeloCelularNovo: {type: String, require: true},
        numeroPatrimonioNovo: {type: String, require: true},
        numeroDeCelularNovo: {type: String, require: true},
        observacao: {type: String, require: true},
        dataEHora: {type: String},
        status: {type: String, require: true},
    }
);

/* Auto increment valor para o schema */
assistenciaSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: 'order'});

const assistencias = mongoose.model('registroAssistencias', assistenciaSchema)

export default assistencias;