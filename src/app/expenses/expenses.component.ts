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
  months_table: string[] = [];
  column_width: number;
  months: number[] = [...Array(12).keys()].map((_, idx) => 1 + idx);
  years: number[] = [...Array(2022-2000+1).keys()].map((_, idx) => 2000 + idx);
  top_year: number;
  top_month: number;
  bottom_year: number;
  bottom_month: number;  

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.top_year = new Date().getUTCFullYear();
    this.top_month = new Date().getUTCMonth() + 1;
    this.bottom_year = (this.top_month < 6) ? this.top_year - 1 : this.top_year;
    this.bottom_month = (this.top_month < 6) ? this.top_month + 7 : this.top_month - 5;
    this.getExpenses();
  }

  getExpenses(): void {
    this.expenseService.getExpensesByDate(this.top_year, this.top_month, this.bottom_year, this.bottom_month).subscribe(
      expenses => {
        this.months_table = [];
        expenses.sort((a, b) => {
          if(a.reference_year === b.reference_year)
            return a.reference_month - b.reference_month;
          else
            return a.reference_year - b.reference_year;
        });
        const first_month = this.bottom_month;
        const first_year = this.bottom_year;
        const last_month = this.top_month;
        const last_year = this.top_year;

        const unique_desc = [...new Set(expenses.map(item => item.description))];
        unique_desc.forEach(desc => {
          const amount_list = [];
          for(let i = first_year; i <= last_year; i++){
            const f = (i === first_year) ? first_month : 1;
            const l = (i === last_year) ? last_month : 12;
            for(let j = f; j <= l; j++){
              this.months_table.push(`${j.toString().padStart(2,'0')}/${i}`);
              const e = expenses.find(e => e.description === desc && e.reference_year === i && e.reference_month === j);
              amount_list.push(e ? e : empty_expense);
            }
          }
          this.expenses[desc] = amount_list;
        });
        this.months_table = [...new Set(this.months_table)];
        this.column_width = 70/this.months_table.length;
      }
    );
  }

  onSubmit(): void {
    if(this.top_year < this.bottom_year)
      alert("To year must be higher than from year.");
    else if(this.top_year === this.bottom_year && this.top_month < this.bottom_month)
      alert("To month must be higher than from month if they have same year.");
    else if(this.top_year - this.bottom_year > 1 ||
            (this.top_year - this.bottom_year === 1 && this.bottom_month - this.top_month < 7) ||
            (this.top_year === this.bottom_year && this.top_month - this.bottom_month > 5))
      alert("Range must be maximum of 6 months");
    else{
      this.expenses = {};
      this.getExpenses();
    }
  }

}
