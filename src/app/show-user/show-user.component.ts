import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  users:any[] = [];
  constructor(private UserService:UserService) { }

  ngOnInit(): void {
  }

  getUser()
  {
   this.users = this.UserService.getUser();
  }

}
