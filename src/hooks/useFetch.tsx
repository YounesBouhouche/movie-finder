import { useEffect, useState } from "react";

export default function useFetch<T>(
  endpoint: string,
  map: (data: any) => T = (data) => data,
  deps: React.DependencyList = [],
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
  const [data, setData] = useState<T|null>(defaultValue || null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string|null>(null);

  const fetching = async () => {
    setIsLoading(true);
    try {
      const url = `${baseUrl}${endpoint}`;
      const response = await fetch(url, options);
      if (!response.ok)
        throw new Error('Failed to fetch');
  
      const data = await response.json();
      if (data.Response === 'False') {
        setError('Failed to fetch');
        setData(null);
        return;
      }
      setData(map(data));
    } catch (error) {
      console.log(error);
      setError('Error fetching, please try again later');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetching();
  }, deps);

  return [ data, error, isLoading ];
}