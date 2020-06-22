import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Expense } from '../expense';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.css']
})
export class ExpenseDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private expenseService: ExpenseService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getExpense();
  }

  id: number;
  expense: Expense;

  getExpense(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.expenseService.getExpense(this.id).subscribe(expense => this.expense = expense);
  }

  deleteExpense(): void{
    if(confirm("Confirm deletion of expense?"))
      this.expenseService.deleteExpense(this.expense.id).subscribe();
  }

  goBack(): void{
    this.location.back();
  }

}
