// src/services/paymob/auth.service.ts
import { config } from "../../config/env";
import httpsAgent from "../../utils/httpsClient";
import { AxiosError } from "axios";

export const authenticateWithPaymob = async (): Promise<string> => {
  try {
    const apiKey = config.paymobApiKey;

    if (!apiKey) {
      throw new Error(
        "PAYMOB_API_KEY is not defined in the environment variables."
      );
    }

    const response = await httpsAgent.post("/auth/tokens", {
      api_key: apiKey,
    });

    const token = response.data.token;

    if (!token) {
      throw new Error("Authentication response did not contain a token.");
    }

    return token;
  } catch (error) {
    const err = error as AxiosError;
    const msg =
      err.response?.data ||
      err.message ||
      "Unknown error during Paymob authentication";

    console.error("Paymob Auth Error:", msg);
    throw new Error("Failed to authenticate with Paymob");
  }
};
