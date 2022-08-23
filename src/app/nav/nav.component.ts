import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

   model:any={};
  constructor(public accountServices:AccountService) { }

  ngOnInit(): void {
  }

  login()
  {
    this.accountServices.login(this.model).subscribe(
      response=>
      {console.log(response);
      })
  }

  logout()
  {
    this.accountServices.logout();
  }

}