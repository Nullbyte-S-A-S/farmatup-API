import { Router } from "express";
import registerRouter from "./register/register.routes";
import loginRouter from "./login/login.routes";
import branchRouter from "./branch/branch.routes";

const routes: Router = Router();

routes.use(loginRouter);
routes.use(registerRouter);
routes.use(branchRouter);

export default routes;
