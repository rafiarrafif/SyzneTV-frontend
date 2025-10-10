import { useRouter } from "next/navigation";

export const delayButtonClick = (
  router: ReturnType<typeof useRouter>,
  href: string,
  timeout: number = 300
) => {
  setTimeout(() => {
    router.push(href);
  }, timeout);
};
