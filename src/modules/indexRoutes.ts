import { Router } from "express";
import authRoutes from "./routers/auth.routes";
 // ajusta la ruta según tu estructura

const router = Router();

router.use("/api", authRoutes);

export default router;
