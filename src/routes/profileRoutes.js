const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const verifyToken = require('../middleware/authMiddleware');

/**
 * @swagger
 * /profile:
 *   put:
 *     summary: Update profil pengguna
 *     description: Mengubah data profil (name/email). Wajib menyertakan JWT.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Admin T-Mart
 *               email:
 *                 type: string
 *                 example: admin@example.com
 *     responses:
 *       200:
 *         description: Profile updated
 *       401:
 *         description: Token tidak valid
 *       404:
 *         description: User tidak ditemukan
 */

router.put('/', verifyToken, profileController.updateProfile);

module.exports = router;
