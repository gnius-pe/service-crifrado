import {encryptPolybius} from "../service/polybius.service.js"

export const crifradoByPolbuis = async (req,res) =>{
    res.status(200).json({
        message : encryptPolybius(req.query.message)
    })
}