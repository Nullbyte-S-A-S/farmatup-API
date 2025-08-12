import { Router } from "express";
import { RegisterController, getAllUsers, getUserById, updateUser, deleteUser } from "../../controllers/register/register.controller";



const router = Router();

// Rutas de autenticación
router.post("/register", RegisterController);


// Rutas de usuarios
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
