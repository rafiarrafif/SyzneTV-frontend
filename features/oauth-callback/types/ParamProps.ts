export interface ParamProps {
  params: { provider: string[] };
  searchParams:
    | string
    | string[][]
    | Record<string, string>
    | URLSearchParams
    | undefined;
}
