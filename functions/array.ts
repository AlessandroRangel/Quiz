export function randomizer(elements: any[]): any[] {
  return elements.sort(() => Math.random() - Math.random());
}
