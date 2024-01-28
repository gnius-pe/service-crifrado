import { Router } from "express";
import {crifradoByPolbuis} from "../controllers/polybius.controllers.js";

const router = Router();

/**
 * @swagger
 * /api/polybius:
 *  get:
 *      summary: obtienes el mensaje encriptado
 *      tags:
 *       - Polybius
 *      parameters:
 *       - in: query
 *         name: message
 *         schema:
 *           type: string
 *         description: mensaje a esccriptar
 *      responses:
 *          200:
 *              description: el mesaje se ecripto correctamente
 */
router.get('/polybius',crifradoByPolbuis);

export default router;