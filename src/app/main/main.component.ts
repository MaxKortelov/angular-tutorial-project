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
    // for await(let key: boolean | undefined of this.hide) {
    //   // setTimeout(() => {this.hide[key] = false}, 300)
    // }
  }

}
