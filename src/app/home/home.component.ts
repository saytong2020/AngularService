import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor ( private homeService:HomeService){

  }
  form = {
    valueA: "",
    valueB: ""
  }

  resault:String="";



  ngOnInit(): void{
  }

  onSum(){

    this.resault =  this.homeService.onSum(this.form.valueA,this.form.valueB);

  }

}
