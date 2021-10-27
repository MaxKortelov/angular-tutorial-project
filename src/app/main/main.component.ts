import { Component, OnInit } from '@angular/core';

interface Elements {
  first: boolean,
  second: boolean,
  third: boolean,
  fourth: boolean,
  fifth: boolean,
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor() { }

  hide : Elements = {
    first: false,
    second: true,
    third: true,
    fourth: true,
    fifth: true,
};

  ngOnInit(): void {
    setTimeout(() => {this.hide.second = false}, 500);
    setTimeout(() => {this.hide.third = false}, 1000);
    setTimeout(() => {this.hide.fourth = false}, 1500);
    setTimeout(() => {this.hide.fifth = false}, 2000);
  }

}
