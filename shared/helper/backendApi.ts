export const API_BASE_URL =
  process.env.MAIN_BACKEND_API_URL ?? "http://localhost";

const apiFetch = async <T = unknown>(
  path: string,
  init?: RequestInit
): Promise<T> => {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
    cache: "no-store",
  });

  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export default apiFetch;
