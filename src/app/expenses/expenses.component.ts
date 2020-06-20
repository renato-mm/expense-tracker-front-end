import { Component, OnInit } from '@angular/core';
import { Expense } from "../expense"
import { EXPENSES } from "../mock-expenses"

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  expenses: Expense[] = EXPENSES;

  constructor() { }

  ngOnInit(): void {
  }

}
