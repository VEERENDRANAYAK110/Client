import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  constructor(public accountServices:AccountService, private router:Router,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  login()
  {
    this.accountServices.login(this.model).subscribe(
      {
        next:response=>
        {
          this.router.navigateByUrl('/members');
        },
        error: error=>{console.log(error);
          this.toastr.error(error.error,
            'Login Failed!!' , {
              enableHtml: true,
              closeButton: true,
              timeOut: 2000
          })
      }
      })
  }

  logout()
  {
    this.accountServices.logout();
    this,this.router.navigateByUrl('/');
  }

}
