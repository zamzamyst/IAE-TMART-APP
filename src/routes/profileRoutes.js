const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");
const verifyToken = require("../middleware/authMiddleware");

/**
 * @swagger
 * /profile:
 *   put:
 *     summary: Update profil pengguna
 *     description: Mengubah data profil (name/email/password), serta wajib menyertakan JWT.
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
 *                 example: User Baru
 *               email:
 *                 type: string
 *                 example: user1@example.com
 *     responses:
 *       200:
 *         description: Profile berhasil diperbarui
 *       401:
 *         description: Token tidak valid
 *       403:
 *         description: Token sudah expired
 */

router.put("/", verifyToken, profileController.updateProfile);

module.exports = router;
