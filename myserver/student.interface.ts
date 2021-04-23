export interface Student {
  firstname: string;
  lastname: string;
  address: Address;
  xmarks: Xmarks;
  xiimarks: Xiimarks;
  language: Languages;
}

interface Address {
  dno: string;
  apartment?: string;
  street: string;
  city: string;
  country: string;
}

interface Xmarks {
  maths: number;
  science: number;
  social: number;
  english: number;
  hindi?: number;
}

interface Xiimarks {
  maths: number;
  computers: number;
  electronics: number;
}

interface Languages {
  english: boolean;
  hindi: boolean;
  french: boolean;
  spanish: boolean;
}
