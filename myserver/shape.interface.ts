export interface Ishape {
  type: string;
  length: number;
  breadth?: number;
  area(): number;
  perimeter(): number;
}
