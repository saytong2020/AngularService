import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  onSum (valA:any,valB:any)
  {
    let valueA = +valA;
    let valueB = +valB;
    return (valueA + valueB).toString() ;
  }
}
