export function toKebabCase(value: string): string {
  return value.toLowerCase().replace(/ /g, '-');
}