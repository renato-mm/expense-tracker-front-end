import { Component, OnInit } from '@angular/core';
import { Expense } from "../expense"
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  expenses: Expense[];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.getExpenses()
  }

  getExpenses(): void {
    this.expenseService.getExpenses().subscribe(expenses => this.expenses = expenses)
  }

}
