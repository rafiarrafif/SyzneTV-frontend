export interface CallbackFromBackend<T> {
  success: boolean;
  status: number;
  message: string;
  data?: T;
}
