import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Expense } from '../expense';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private expenseService: ExpenseService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getExpenses()
  }

  description: string;
  expenses: Expense[];

  getExpenses(): void {
    this.description = this.route.snapshot.paramMap.get('desc');
    this.expenseService.getExpensesByDescription(this.description).subscribe(
      expenses => this.expenses = expenses.sort((a, b) => {
        if(a.reference_year === b.reference_year)
          return a.reference_month - b.reference_month;
        else
          return a.reference_year - b.reference_year;
      })
    );
  }

  goBack(): void{
    this.location.back();
  }

}
