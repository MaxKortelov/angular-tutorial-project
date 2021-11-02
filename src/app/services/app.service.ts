import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class AppService {
  public page: string = 'main'

  setPage(val: string): void {this.page = val}

}
