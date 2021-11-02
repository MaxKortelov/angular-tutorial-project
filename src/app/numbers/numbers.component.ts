import {Component, OnDestroy, OnInit} from '@angular/core';
import {NumbersService} from "../services/numbers.service";
import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AppService} from "../services/app.service";

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent implements OnInit, OnDestroy {

  constructor(
    public numberService : NumbersService,
    private formBuilder: FormBuilder,
    private router: Router,
    public appService : AppService
  ) { }

  inputValue : string = '';
  subject: Subject<any> = new Subject();
  formGroup: FormGroup = this.formBuilder.group({
    name: [ '' ]
  });

  onKeyUp(e: any): void {
    this.inputValue = e.target.value ?? '';
    this.subject.next();
  }

  onKeyDown(): void {
    this.formGroup.controls.name.clearValidators();
  }

  ngOnInit(): any  {
    if(this.router.url.includes('numbers')) {
      // will be changed on next loop
      setTimeout(() => {
        this.appService.setPage('numbers')
      }, 0)
    }

    this.subject
      .pipe(debounceTime(500))
      .subscribe(() => {
        if(this.inputValue) {
          this.numberService.fetchNumbers(this.inputValue)
            .subscribe(() => {
              console.log(this.numberService.number)
            })
        } else {
          this.numberService.number = this.numberService.initialNumber
        }
      }
      );
  }

  ngOnDestroy() {
    this.numberService.number = this.numberService.initialNumber
  }

}
