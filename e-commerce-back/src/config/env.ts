import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  paymobApiKey: process.env.PAYMOB_API_KEY as string,
  PAYMOB_INTEGRATION_ID: process.env.PAYMOB_INTEGRATION_ID,
};
