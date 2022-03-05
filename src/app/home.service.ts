import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  fnSum: any;
  onSum() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
