import { capitalize } from "@monorepo/string-utils";

export function sayHello(name: string): string {
  return `Hello ${capitalize(name)}!`;
}
