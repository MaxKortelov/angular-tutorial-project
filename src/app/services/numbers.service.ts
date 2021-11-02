import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {debounceTime, tap} from "rxjs/operators";

export interface NumberList {
  found: boolean
  number: number
  text: string
  type: string
}

@Injectable({providedIn: 'root'})
export class NumbersService{

  constructor(private http: HttpClient) { }
  public initialNumber : NumberList = {found: false, number: 0, text: '', type: ''}
  public number : NumberList = this.initialNumber


  fetchNumbers(val: string): Observable<NumberList> {
    const url : string = `http://numbersapi.com/${val}/trivia?json`
    return this.http.get<NumberList>(url)
      .pipe(debounceTime(500))
      .pipe(tap(res => this.number = res))
  }

}
