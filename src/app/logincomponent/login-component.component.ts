import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../appService/login.service';


@Component({
  selector: 'app-logincomponent',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit{

  //constructor(private _msgService:LoginService) { }
  //product:any={}
  @Input() myValue="ran"; 

  ngOnInit(): void {
  //this.product=this._msgService.product;

  }
  //btnclick()
   //{
   //this._msgService.display();
   //}
  


 }