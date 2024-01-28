import { Router } from "express";
import {crifradoByEscitala} from "../controllers/escitala.controller.js"

const router = Router();

/**
 * @swagger
 * /api/escitala:
 *  get:
 *      summary: obtienes el mensaje encriptado
 *      tags:
 *       - Escitala
 *      parameters:
 *       - in: query
 *         name: message
 *         schema:
 *           type: string
 *         description: mensaje a esccriptar
 *       - in: query
 *         name: diametro
 *         schema:
 *           type: integer
 *         description: numero de filas
 *       - in: query
 *         name: longitud
 *         schema:
 *           type: integer
 *         description: numero de columnas
 *      responses:
 *          200:
 *              description: el mesaje se ecripto correctamente
 */
router.get('/escitala',crifradoByEscitala);

export default router;