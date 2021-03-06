import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../../services/account.service';
import { User } from '../../models/User';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  lmodel: any = {}
  //vError: any;

  constructor(public accountService: AccountService,
    private route: Router,
    private toastsService: ToastrService) { }

  ngOnInit(): void {
  }


  login() {
    //this.vError = "";
    this.accountService.login(this.lmodel).subscribe(res => {
      this.route.navigateByUrl('/users')
      console.log((res));
    }, error => {
      console.log(error);
      //this.vError = error.error;       
    });
  }

  logout() {
    this.accountService.logout();
    this.route.navigateByUrl('/')
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
