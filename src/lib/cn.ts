import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(
  ...rest: (string | undefined | null | false)[]
): string {
  return twMerge(clsx(...rest));
}

export const axios = {
  get(url: string): Promise<Response> {
    return fetch(url);
  },
};
