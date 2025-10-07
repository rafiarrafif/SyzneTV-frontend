export type ServerRequestCallback = {
  success: boolean;
  status: number;
  text: { message: string };
  data?: any;
  error?: unknown;
};
