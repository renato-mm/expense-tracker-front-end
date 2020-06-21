export interface Expense {
  id: number;
  description: string;
  amount: number;
  due_date: string;
  payment_date: string;
  reference_month: number;
  reference_year: number;
}