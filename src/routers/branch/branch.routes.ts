import { Router } from "express";
import {
  createBranch,
  getBranches,
  getBranchById,
  updateBranch,
  deleteBranch,
} from "../../controllers/branch/branch.controller";

const router = Router();

/**
 * @openapi
 * /branch:
 *   post:
 *     summary: Crear una nueva sucursal
 *     tags:
 *       - Branch
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - address
 *             properties:
 *               name:
 *                 type: string
 *                 example: Sucursal Centro
 *               address:
 *                 type: string
 *                 example: Calle 123, Bogotá
 *     responses:
 *       201:
 *         description: Sucursal creada con éxito
 *       400:
 *         description: Datos inválidos
 */
router.post("/branch", createBranch);

/**
 * @openapi
 * /branch:
 *   get:
 *     summary: Obtener todas las sucursales
 *     tags:
 *       - Branch
 *     responses:
 *       200:
 *         description: Lista de sucursales
 */
router.get("/branch", getBranches);

/**
 * @openapi
 * /branch/{id}:
 *   get:
 *     summary: Obtener una sucursal por ID
 *     tags:
 *       - Branch
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la sucursal
 *     responses:
 *       200:
 *         description: Sucursal encontrada
 *       404:
 *         description: Sucursal no encontrada
 */
router.get("/branch/:id", getBranchById);

/**
 * @openapi
 * /branch/{id}:
 *   patch:
 *     summary: Actualizar una sucursal por ID
 *     tags:
 *       - Branch
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la sucursal
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sucursal actualizada
 *       404:
 *         description: Sucursal no encontrada
 */
router.patch("/branch/:id", updateBranch);

/**
 * @openapi
 * /branch/{id}:
 *   delete:
 *     summary: Eliminar una sucursal por ID
 *     tags:
 *       - Branch
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la sucursal
 *     responses:
 *       204:
 *         description: Sucursal eliminada con éxito
 *       404:
 *         description: Sucursal no encontrada
 */
router.delete("/branch/:id", deleteBranch);

export default router;
