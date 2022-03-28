import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'psap-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorPageComponent implements OnInit {
  // TODO: implement this component in next commit
  statusCode: string;
  errorMessage: string;

  constructor(private translateService: TranslateService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // TODO: string to constants
    this.statusCode = this.route.snapshot.paramMap.get('statusCode') || '400';
    this.initiateErrorMessage();
  }

  private initiateErrorMessage(): void {
    // TODO: strings to constants
    if (this.statusCode === '404') {
      this.errorMessage = this.translateService.instant('exceptions.common.not_found');
    } else if (this.statusCode === '403') {
      this.errorMessage = this.translateService.instant('exceptions.common.forbidden');
    } else {
      this.errorMessage = 'Something went wrong';
    }
  }
}
