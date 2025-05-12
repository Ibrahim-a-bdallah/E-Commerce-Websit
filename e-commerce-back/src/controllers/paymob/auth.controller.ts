// src/controllers/paymob/auth.controller.ts
import { Request, Response, NextFunction } from "express";

import { authenticateWithPaymob } from "../../services/paymob/auth.service";

export const getAuthToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const token = await authenticateWithPaymob();

    return res.json({ token });
  } catch (error) {
    next(error);
  }
};
