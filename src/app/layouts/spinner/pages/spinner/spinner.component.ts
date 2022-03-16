import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'psap-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent implements OnInit {
  showSpinner = false;

  constructor(private spinnerService: SpinnerService, private cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.spinnerService.getLoadingObservable().subscribe(status => {
      this.showSpinner = status;
      this.cdRef.detectChanges();
    });
  }
}
