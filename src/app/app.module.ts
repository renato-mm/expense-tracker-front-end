import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExpensesComponent,
    RegisterFormComponent,
    ExpenseDetailComponent,
    ExpenseListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
