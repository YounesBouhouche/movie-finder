import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function useQueryFetch<T>(
  endpoint: string,
  key: string,
  map: (data: any) => T = (data) => data,
  baseUrl: string = import.meta.env.VITE_API_BASE_URL,
  options: RequestInit = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
    }
  },
  defaultValue?: T|null
): [T|null, string|null, boolean] {
  const [errorMessage, setErrorMessage] = useState<string|null>(null);
  const fetching = async () => {
    const url = `${baseUrl}${endpoint}`;
    const response = await fetch(url, options);
    if (!response.ok)
      throw new Error('Failed to fetch');
    const data = await response.json();
    if (data.Response === 'False')
      throw new Error('Failed to fetch');
    return map(data);
  };

  const {data, isFetching} = useQuery({
    queryFn: fetching,
    queryKey: [key],
    initialData: defaultValue || null,
    throwOnError(error) {
      setErrorMessage(error.message);
      return true;
    },
  });

  return [ data || defaultValue || null, errorMessage, isFetching ];
}