import assistencias from "../models/dadosAssistencia.js";

class assistenciaController {

    static listarAssistencias = (req, res) => {
        assistencias.find((err, assistencias) => {
            res.status(200).json(assistencias)
        })
    }

}

export default assistenciaController 