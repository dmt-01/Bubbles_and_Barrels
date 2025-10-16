import { useState } from "react";
import type { LoginData, UseLogInReturn } from "./types";

export default function useLogIn(url: string): UseLogInReturn {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const postData = async (data: LoginData): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || "Erreur serveur");
      }

      setSuccess(true);
      setLoading(false);
    } catch (err: any) {
      setError(err.message || "Une erreur est survenue");
    }
  };

  return { postData, loading, error, success };
}