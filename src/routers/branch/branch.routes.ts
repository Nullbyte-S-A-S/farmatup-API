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
 * components:
 *   schemas:
 *     Branch:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: "Sucursal Norte"
 *         address:
 *           type: string
 *           example: "Calle 123 #45-67"
 *         num_tel:
 *           type: string
 *           example: "+57 300 123 4567"
 *         email:
 *           type: string
 *           example: "sucursal@example.com"
 *         city:
 *           type: string
 *           example: "Bogotá"
 *         state:
 *           type: boolean
 *           example: true
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2025-08-12T15:30:00Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2025-08-12T15:45:00Z"
 */

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
 *             allOf:
 *               - $ref: '#/components/schemas/Branch'
 *             required:
 *               - name
 *               - address
 *               - state
 *     responses:
 *       201:
 *         description: Sucursal creada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Branch'
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
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Branch'
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
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Branch'
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
 *             $ref: '#/components/schemas/Branch'
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

/**
 * @openapi
 * components:
 *   schemas:
 *     Branch:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: Sucursal Norte
 *         address:
 *           type: string
 *           example: "Calle 123 #45-67"
 *         num_tel:
 *           type: string
 *           example: "3216549870"
 *         email:
 *           type: string
 *           example: "sucursal@example.com"
 *         city:
 *           type: string
 *           example: "Bogotá"
 *         state:
 *           type: boolean
 *           example: true
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2025-08-12T15:30:00Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2025-08-12T15:45:00Z"
 */

export default router;
