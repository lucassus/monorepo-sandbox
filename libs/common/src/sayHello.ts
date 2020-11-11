import { capitalize } from '@sandbox/string-utils'

export function sayHello (name: string): string {
  return `Hello ${capitalize(name)}!`
}
