import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Expense } from "./expense"
import { EXPENSES } from "./mock-expenses"
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient) { }

  private expensesUrl = '/api/expenses'

  getExpenses(): Observable<Expense[]>{
    return of(EXPENSES);
  }

  getFullExpenses(description: string): Observable<Expense[]>{
    return of(EXPENSES.filter(e => e.description === description))
  }

  getExpense(id: number): Observable<Expense>{
    return of(EXPENSES.find(e => e.id === id));
  }

  getAllExpenses(): Observable<Expense[]>{
    return this.http.get<Expense[]>(this.expensesUrl);
  }

  getExpensesByDate(top_year: number, top_month: number, bottom_year: number, bottom_month: number): Observable<Expense[]>{
    return this.http.get<Expense[]>(`${this.expensesUrl}/date?ty=${top_year}&tm=${top_month}&by=${bottom_year}&bm=${bottom_month}`);
  }

  getExpensesByDescription(description: string): Observable<Expense[]>{
    return this.http.get<Expense[]>(`${this.expensesUrl}?description=${description}`);
  }

  getExpenseById(id: number): Observable<Expense>{
    return this.http.get<Expense>(`${this.expensesUrl}/${id}`);
  }

  getExpensesByReferenceMonth(reference_month: string): Observable<Expense[]>{
    return this.http.get<Expense[]>(`${this.expensesUrl}?ref_month=${reference_month}`);
  }

  addExpense(expense: Expense): Observable<Expense>{
    return this.http.post<Expense>(this.expensesUrl, expense);
  }

  updateExpense(id: number, expense: Expense): Observable<any>{
    return this.http.put(`${this.expensesUrl}/${id}`, expense);
  }

  deleteExpense(id: number): Observable<Expense>{
    return this.http.delete<Expense>(`${this.expensesUrl}/${id}`);
  }

}
