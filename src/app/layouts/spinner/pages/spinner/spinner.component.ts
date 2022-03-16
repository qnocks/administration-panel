import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'psap-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent implements OnInit {
  readonly spinnerDiameter = 150;
  isSpinnerVisible = false;

  constructor(private spinnerService: SpinnerService, private cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.spinnerService.isLoading().subscribe(status => {
      this.isSpinnerVisible = status;
      this.cdRef.detectChanges();
    });
  }
}
