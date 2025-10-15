const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");

/**
 * @swagger
 * /items:
 *   get:
 *     summary: Ambil daftar item/menu
 *     description: Mengambil semua data item yang tersedia di T-Mart.
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
 *                         example: Laptop
 *                       price:
 *                         type: integer
 *                         example: 12000000
 */

router.get("/", menuController.getItems);

module.exports = router;
