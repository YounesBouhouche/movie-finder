import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';

function useQueryFetch(endpoint, key, map = (data) => data, baseUrl = "https://api.themoviedb.org/3/", options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NmI0MDRhZjZjZGQwNTU4ZTIwN2M2YmZjZjE0NDlhNSIsIm5iZiI6MTc1NjM2MTIyMy43Mjk5OTk4LCJzdWIiOiI2OGFmZjIwN2M3MzBlOWM1MzgzOTBjMTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3KTgD-fqN2AHYr0WzIqn3IFOB4Jhe0GZK4bbw4ASITM"}`
  }
}, defaultValue) {
  const [errorMessage, setErrorMessage] = useState(null);
  const fetching = async () => {
    const url = `${baseUrl}${endpoint}`;
    const response = await fetch(url, options);
    if (!response.ok)
      throw new Error("Failed to fetch");
    const data2 = await response.json();
    if (data2.Response === "False")
      throw new Error("Failed to fetch");
    return map(data2);
  };
  const { data, isFetching } = useQuery({
    queryFn: fetching,
    queryKey: [key],
    initialData: null,
    throwOnError(error) {
      setErrorMessage(error.message);
      return true;
    }
  });
  useEffect(() => {
    console.log("Loading: " + isFetching);
  }, [isFetching]);
  return [data || defaultValue || null, errorMessage, isFetching];
}

export { useQueryFetch as u };
//# sourceMappingURL=useQueryFetch-C9Zr7z3b.mjs.map
