

import { Router } from "express";
import registerRouter from "../modules/routers/register/register.routes";
import loginrouter from "../modules/routers/login/login.routes";

const routes: Router = Router();

routes.use(loginrouter)
routes.use(registerRouter)

export default routes;