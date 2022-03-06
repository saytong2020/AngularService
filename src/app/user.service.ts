import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:any[] = [];

  constructor() { }

  getUser()
  {
    return this.users;
  }
  setUser(user:any)
  {
    this.users.push(user);

    console.log();
  }
}
