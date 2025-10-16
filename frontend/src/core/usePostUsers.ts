import { useState } from "react";
import type { UsePostFetchResult } from "./types";



export default function usePostFetch<T = any>(url: string): UsePostFetchResult<T> {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  const postData = async (body: unknown): Promise<T | void> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const result: T = await response.json();

      if (!response.ok) {
        throw new Error((result as any).message || "Erreur lors de la requête");
      }

      setData(result);
      setLoading(false);
      return result;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Erreur inconnue";
      setError(message);
      console.error(" error:", message);
    }
  };

  return { postData, data, loading, error };
}