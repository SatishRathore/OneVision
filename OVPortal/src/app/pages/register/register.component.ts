import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/shared/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelregistor = new EventEmitter()
  model: any = {};

  constructor(private accountService: AccountService,
    private toastsService: ToastrService) { }

  ngOnInit(): void {
  }

  cancel() {
    this.cancelregistor.emit(false);
  }

  register() {
    this.accountService.register(this.model).subscribe(resp => {
      console.log(resp);
      this.cancel();
    });
  }
}
