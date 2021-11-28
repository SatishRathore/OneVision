import { Injectable } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loadingRequestCount = 0;
  constructor(private spinnerService: NgxSpinnerService) { }

  loading() {
    this.loadingRequestCount++;
    this.spinnerService.show(undefined, {
      type: 'timer',
      bdColor: 'rgba(51,51,51,0.8)',
      color: '#ffc107'
    });
  }



  idle() {
    this.loadingRequestCount--;
    if (this.loadingRequestCount <= 0) {
      this.loadingRequestCount = 0;
      this.spinnerService.hide();
    }
  }
}
