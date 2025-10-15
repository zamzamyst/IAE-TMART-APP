const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");

/**
 * @swagger
 * /items:
 *   get:
 *     summary: Lihat daftar item/menu
 *     description: Mengambil semua data item/menu yang tersedia di Kantin T-Mart.
 *     responses:
 *       200:
 *         description: Daftar item berhasil diambil.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: Onigiri
 *                       price:
 *                         type: integer
 *                         example: 12000
 */

router.get("/", menuController.getItems);

module.exports = router;
