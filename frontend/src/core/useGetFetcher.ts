import { useEffect, useState } from "react";

interface useFetcherObject<T> {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
  errorMsg: string | undefined;
}

export function useGetFetcher<T>(url: string): useFetcherObject<T> {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function fetcher() {
      setIsLoading(true);
      setIsError(false);
      try {
        const result = await fetch(`http://localhost:5000/api/${url}`);
        const dataResult: T = await result.json();

        setData(dataResult);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
        setErrorMsg("Erreur");
      }
    }

    fetcher();
  }, [url]);

  return { data, isLoading, isError, errorMsg };
}
