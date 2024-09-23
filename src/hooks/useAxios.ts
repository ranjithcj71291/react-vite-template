import { useState, useEffect, useCallback } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import AppConstants from "@/constants/constants.app";

interface UseAxiosProps<T> {
  url: string;
  method?: "GET" | "POST";
  body?: any;
  config?: AxiosRequestConfig;
  skip?: boolean; // flag to skip auto request
}

interface UseAxiosReturn<T> {
  response: T | null;
  error: string | null;
  loading: boolean;
  refetch: () => void; // manual refetch function
}

export const useAxios = <T = any>({
  url,
  method = "GET",
  body = null,
  config = {},
  skip = false,
}: UseAxiosProps<T>): UseAxiosReturn<T> => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  axios.defaults.baseURL = AppConstants.BASE_URL;
  
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      let res: AxiosResponse<T>;
      if (method === "GET") {
        res = await axios.get<T>(url, config);
      } else {
        res = await axios.post<T>(url, body, config);
      }
      setResponse(res.data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setResponse(null);
    } finally {
      setLoading(false);
    }
  }, [url, method, body, config]);

  useEffect(() => {
    if (!skip) {
      fetchData();
    }
  }, [fetchData, skip]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { response, error, loading, refetch };
};
