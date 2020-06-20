export interface Expense {
  description: string;
  amount: number;
  due_date: Date;
  payment_date: Date;
  reference_month: number;
  reference_year: number;
}