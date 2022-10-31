import assistencias from "../models/dadosAssistencia.js";

class assistenciaController {

    static listarAssistencias = (req, res) => {
        assistencias.find((err, assistencias) => {
            res.status(200).json(assistencias)
        })
    }

    static listarAssistenciaPorId = (req, res) => {
        const id = req.params.id

        assistencias.findById(id, (err, assistencias) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Não encontrado`})
            } else {
                res.status(200).send(assistencias)
            }
        })
    }
    
    static cadastrarAssistencia = (req, res) => {
        let assistencia = new assistencias(req.body);
        
        assistencia.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar o registro`})
            } else {
                res.status(201).send(assistencia.toJSON())
            }
        })
    }

    static atualizarAssistencia = (req, res) => {
        const id = req.params.id;

        assistencias.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Atualização realizada com sucesso'})
            } else {
                res.status(500).send({message: err})
            }
        })
    }

    static excluirAssistencia = (req, res) => {
        const id = req.params.id

        assistencias.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: `Registro removido com sucesso!`})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static listarPorFuncionario = (req, res) => {
        const nomeFuncionario = req.query.nomeFuncionario 

        assistencias.find({'nomeFuncionario': nomeFuncionario}, {}, (err, nomeFuncionario) => {
            res.status(200).send(nomeFuncionario);
        })
    }

    static listarPorData = (req, res) => {
        const dataEHora = req.query.dataEHora 

        assistencias.find({'dataEHora': dataEHora}, {}, (err, dataEHora) => {
            res.status(200).send(dataEHora);
        })
    }

    static listarProblemaIdentificado = (req, res) => {
        const problemaIdentificado = req.query.problemaIdentificado 

        assistencias.find({'problemaIdentificado': problemaIdentificado}, {}, (err, problemaIdentificado) => {
            res.status(200).send(problemaIdentificado);
        })
    }

    static listarPorOrder = (req, res) => {
        const order = req.query.order;

        assistencias.find({'order': order}, {}, (err, order) => {
            res.status(200).send(order);
        })
    }

    static deletaAssistenciaOrder = (req, res) => {
        const order = req.query.order;

        assistencias.findOneAndDelete({'order': order}, {}, (err, order) => {
            res.status(200).send(order);
        })
    }

    static alterarAssistenciaOrder = (req, res) => {
        const order = req.query.order;

        assistencias.findOneAndUpdate({'order': order}, {$set: req.body}, (err, order) => {
            res.status(200).send(order);
        })
    }
}

export default assistenciaController 