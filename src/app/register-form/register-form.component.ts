import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ExpenseService } from '../expense.service';
import { Expense } from '../expense';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private expenseService: ExpenseService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.getExpense(+params.id);
      this.submitted = false;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  months: number[] = [...Array(12).keys()].map((_, idx) => 1 + idx);
  years: number[] = [...Array(2022-2000+1).keys()].map((_, idx) => 2000 + idx);

  form: FormGroup;
  text: string;
  
  submitted: boolean;

  id: number;
  expense: Expense;

  subscription: Subscription;

  getExpense(id: number): void {
    this.id = id;
    if(typeof this.id === "number" && this.id){
      this.expenseService.getExpenseById(this.id).subscribe(
        expense => {
          this.expense = expense;
          this.startForm();
        }
      );
    }
    else{
      this.expense  = {id:null,description:null,due_date:null,payment_date:null,
        reference_month:null,reference_year:null,amount:null};
      this.startForm();
    }
  }

  startForm(): void{
    this.form = this.formBuilder.group({
      description: [this.expense.description || '', Validators.required],
      reference_month: [this.expense.reference_month || '', Validators.required],
      reference_year: [this.expense.reference_year || '', [Validators.required]],
      due_date: [this.expense.due_date || '', [Validators.required, dateLimitValidator()]],
      payment_date: [this.expense.payment_date || '', [Validators.required, dateLimitValidator()]],
      amount: [this.expense.amount || '', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    })
  }

  invalidDescription(): boolean{
    return this.submitted && this.form.controls.description.errors != null;
  }

  invalidReferenceMonth(): boolean{
    return this.submitted && this.form.controls.reference_month.errors != null;
  }

  invalidReferenceYear(): boolean{
    return this.submitted && this.form.controls.reference_year.errors != null;
  }

  invalidDueDate(): boolean{
    return this.submitted && this.form.controls.due_date.errors != null;
  }

  invalidPaymentDate(): boolean{
    return this.submitted && this.form.controls.payment_date.errors != null;
  }

  invalidAmount(): boolean{
    return this.submitted && this.form.controls.amount.errors != null;
  }

  onSubmit(): void{
    this.submitted = true;

    if(this.form.valid){
      const expense: Expense = this.form.value;
      if(this.id){
        this.expenseService.updateExpense(this.id, expense).subscribe(
          response => {
            this.text = 'Expense updated'
          },
          error => {
            this.text = 'Error at updating expense';
            console.log(error);
          }
        )
      }
      else{
        this.expenseService.addExpense(expense).subscribe(
          response => {
            this.text = 'Expense registered'
          },
          error => {
            this.text = 'Error at registering expense';
            console.log(error);
          }
        )
      }
    }
  }

  goBack(): void{
    this.location.back();
  }

}

function dateLimitValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const min_date: string = '2000-01-01';
    const max_date: string = '2022-12-31';
    const check = control.value <= min_date || control.value >= max_date;
    return check ? {'dateLimit': {value: control.value}} : null;
  };
}
