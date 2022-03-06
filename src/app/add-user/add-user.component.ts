import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Form, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: any;

  users =[];

  constructor(private fb:FormBuilder, private UserService:UserService) { }

  ngOnInit() {
    this.userForm = this.fb.group (
    {
      username: ['',Validators.required],
      email: ['',Validators.email],
      phone: ['',[Validators.required,Validators.minLength(9),Validators.maxLength(10)]],
    }
  );
  }
  createUser ()
  {
    let user = this.userForm.getRawValue();
    console.log(user.username);
    console.log(user.email);
    console.log(user.phone);

  this.UserService.setUser(user);

  }
}


