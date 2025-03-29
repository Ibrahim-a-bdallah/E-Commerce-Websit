import axios from "axios";
import { useState } from "react";

type TStatus = "idle" | "checking" | "available" | "notAvailable" | "failed";

const useCheckEmailAvailability = () => {
  const [emailStatus, setEmailStatus] = useState<TStatus>("idle");
  const [preveEmail, setPreveEmail] = useState<null | string>(null);

  const checkEmailAvailability = async (email: string) => {
    setPreveEmail(email);
    setEmailStatus("checking");
    try {
      const response = await axios.get(`/users?email=${email}`);

      if (response.data === "Email is available") {
        setEmailStatus("available");
      } else if (response.data === "Email is already taken") {
        setEmailStatus("notAvailable");
      }
    } catch (error) {
      setEmailStatus("failed");
      console.error(error);
    }
  };
  const resetCheckEmailAvailability = () => {
    setEmailStatus("idle");
    setPreveEmail(null);
  };
  return {
    emailStatus,
    preveEmail,
    setEmailStatus,
    checkEmailAvailability,
    resetCheckEmailAvailability,
  };
};
export default useCheckEmailAvailability;
