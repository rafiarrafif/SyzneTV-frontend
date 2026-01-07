export interface BackendResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: unknown;
}

export const backendFetch = async (path: string, options: RequestInit = {}) => {
  const res = await fetch(`${process.env.BACKEND_ENDPOINT}/${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
      ...options.headers,
    },
    cache: "default",
  });

  const resJson = (await res.json()) as BackendResponse;

  if (!res.ok || !resJson.success) {
    throw new Error(`Elysia error: ${resJson.error}`);
  }

  return resJson;
};
