import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  months: string[] = ["January", "February", "March", "April", "May", 'June', 'July', 'August', 'September', "October", "November", "December"];
  years: number[] = [...Array(2022-2000+1).keys()].map((_, idx) => 2000 + idx);

  form: FormGroup;
  text: string;
  
  submitted: boolean = false;

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
      this.text = 'Expense registered';
    }
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      description: ['', Validators.required],
      reference_month: ['', Validators.required],
      reference_year: ['', [Validators.required]],
      due_date: ['', [Validators.required, dateLimitValidator()]],
      payment_date: ['', [Validators.required, dateLimitValidator()]],
      amount: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    })
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
