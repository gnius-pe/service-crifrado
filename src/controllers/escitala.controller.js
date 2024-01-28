import {escitalaCrifrar} from "../service/escitala.service.js"

export const crifradoByEscitala = async (req, res) =>{
    res.status(200).json({
        message: escitalaCrifrar(req.query.message,req.query.diametro,req.query.longitud)
    })
}