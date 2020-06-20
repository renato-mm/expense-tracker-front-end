import { Expense } from './expense';

export const EXPENSES: Expense[] = [
  {
    description: "Gas",
    amount: 100.71,
    due_date: new Date(2019,10,5),
    payment_date: new Date(2019,10,4),
    reference_month: 11,
    reference_year: 2019
  },
  {
    description: "Electricity",
    amount: 68.33,
    due_date: new Date(2019,10,10),
    payment_date: new Date(2019,10,10),
    reference_month: 11,
    reference_year: 2019
  },
  {
    description: "Internet",
    amount: 99.90,
    due_date: new Date(2019,10,10),
    payment_date: new Date(2019,10,10),
    reference_month: 11,
    reference_year: 2019
  },
  {
    description: "Gas",
    amount: 113.02,
    due_date: new Date(2020,4,5),
    payment_date: new Date(2020,4,4),
    reference_month: 5,
    reference_year: 2020
  },
  {
    description: "Electricity",
    amount: 49.88,
    due_date: new Date(2020,4,10),
    payment_date: new Date(2020,4,10),
    reference_month: 5,
    reference_year: 2020
  },
  {
    description: "Internet",
    amount: 99.90,
    due_date: new Date(2020,4,10),
    payment_date: new Date(2020,4,10),
    reference_month: 5,
    reference_year: 2020
  },
  {
    description: "Gas",
    amount: 119.45,
    due_date: new Date(2020,5,5),
    payment_date: new Date(2020,5,4),
    reference_month: 6,
    reference_year: 2020
  },
  {
    description: "Electricity",
    amount: 54.18,
    due_date: new Date(2020,5,10),
    payment_date: new Date(2020,5,10),
    reference_month: 6,
    reference_year: 2020
  },
  {
    description: "Internet",
    amount: 99.90,
    due_date: new Date(2020,5,10),
    payment_date: new Date(2020,5,10),
    reference_month: 6,
    reference_year: 2020
  }
]