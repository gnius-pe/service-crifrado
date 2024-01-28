import { Router } from "express";
import {crifradoByPolbuis} from "../controllers/polvios.controllers.js"

const router = Router();

/**
 * @swagger
 * /api/polvios:
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
router.get('/polvios',crifradoByPolbuis);

export default router;