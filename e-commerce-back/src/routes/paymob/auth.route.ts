// src/routes/paymob/auth.route.ts

import { Router } from "express";
import { getAuthToken } from "../../controllers/paymob/auth.controller";

const router = Router();

router.post("/token", getAuthToken);

export default router;
//
