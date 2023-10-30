import React from "react";

function useFetch<T>(url: string, options: RequestInit | undefined) {
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState<Error | null>(null);
  const [loading, setLoading] = React.useState(false);
  const optionsRef = React.useRef(options);
  optionsRef.current = options;

  React.useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    async function request() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url, { signal, ...optionsRef.current });
        if (!response.ok) {
          const json = await response.json();
          throw new Error(`Error ${response.status}: ${json}`);
        }

        const json = (await response.json()) as T;
        if (!signal.aborted) setData(json);
      } catch (err) {
        if (!signal.aborted && err instanceof Error) setError(err);
      } finally {
        setLoading(false);
      }
    }

    request();
  }, [url]);

  return { data, error, loading };
}

export default useFetch;
