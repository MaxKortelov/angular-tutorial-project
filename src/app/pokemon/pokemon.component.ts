import { Component, OnInit } from '@angular/core';
import {AppService} from "../services/app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  constructor(
    private router: Router,
    private appService : AppService
  ) { }

  ngOnInit(): void {
    if(this.router.url.includes('numbers')) {
      // will be changed on next loop
      setTimeout(() => {
        this.appService.setPage('numbers')
      }, 0)
    }
  }

}
