import express from "express";
import assistencias from "./assistenciasRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de node"})
    })

    app.use(
        express.json(),
        assistencias
    )
}

export default routes

