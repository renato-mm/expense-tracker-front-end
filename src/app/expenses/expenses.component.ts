import { Component, OnInit } from '@angular/core';
import { Expense } from "../expense"
import { ExpenseService } from '../expense.service';

const empty_expense = {id:null,description:null,due_date:null,payment_date:null,
  reference_month:null,reference_year:null,amount:null};

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  expenses: { [id: string]: Expense[] } = {};
  months: string[] = [];
  column_width: number;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.getExpenses()
  }

  getExpenses(): void {
    this.expenseService.getAllExpenses().subscribe(
      expenses => {
        expenses.sort((a, b) => {
          if(a.reference_year === b.reference_year)
            return a.reference_month - b.reference_month;
          else
            return a.reference_year - b.reference_year;
        });
        const first_month = expenses[0].reference_month;
        const first_year = expenses[0].reference_year;
        const last_month = expenses[expenses.length-1].reference_month;
        const last_year = expenses[expenses.length-1].reference_year;

        const unique_desc = [...new Set(expenses.map(item => item.description))];
        unique_desc.forEach(desc => {
          const amount_list = [];
          for(let i = first_year; i <= last_year; i++){
            const f = (i === first_year) ? first_month : 1;
            const l = (i === last_year) ? last_month : 12;
            for(let j = f; j <= l; j++){
              this.months.push(`${j.toString().padStart(2,'0')}/${i}`);
              const e = expenses.find(e => e.description === desc && e.reference_year === i && e.reference_month === j);
              amount_list.push(e ? e : empty_expense);
            }
          }
          this.months = [...new Set(this.months)];
          this.expenses[desc] = amount_list;
        });
        this.column_width = 70/this.months.length;
      });
  }

}
