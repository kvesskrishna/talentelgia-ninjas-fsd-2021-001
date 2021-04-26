export interface IEmployee {
  empId: string;
  empName: string;
  basic: number;
  travel: number;
  medical: number;
  location: string;
  getSalary(): number;
}
