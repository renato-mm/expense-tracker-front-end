import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensesComponent } from './expenses/expenses.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/expenses', pathMatch: 'full' },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'register/:id', component: RegisterFormComponent },
  { path: 'expenses/:desc', component: ExpenseListComponent },
  { path: 'detail/:id', component: ExpenseDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
