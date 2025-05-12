import { Request, Response, NextFunction } from "express";
import { createOrderSchema } from "../../models/paymob/order.schema";
import * as createOrderService from "../../services/paymob/order.service";

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  console.log(`body:${req.body}`);
  try {
    // ✅ Validate request body
    const validatedData = createOrderSchema.parse(req.body);

    // 🧠 Call the service layer to create the order
    const order = await createOrderService.createOrder(validatedData);

    // 🎉 Respond with the created order info
    return res.status(201).json({
      message: "Order created successfully",
      data: order,
    });
  } catch (error) {
    // 🛡️ Handle validation errors from Zod
    if (error instanceof Error && "errors" in error) {
      return res.status(400).json({
        message: "Validation failed",
        errors: (error as any).errors,
      });
    }

    // 🔥 Pass other errors to error handler
    return next(error);
  }
};
