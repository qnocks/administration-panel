import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpStatusCode } from '@angular/common/http';
import { Routing } from '../../../../core/constants/routing';
import { TranslateService } from '@ngx-translate/core';
import { I18nHelper } from '../../../../shared/i18n/i18n-helper';

@Component({
  selector: 'psap-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorPageComponent implements OnInit {
  statusCode: string;
  errorMessage: string;
  readonly redirectUrl: string = `/${Routing.HOME.BASE}`;
  private readonly defaultErrorCode: string = HttpStatusCode.NotFound.toString();

  constructor(private translateService: TranslateService,
              private i18nHelper: I18nHelper,
              private route: ActivatedRoute,
              private router: Router) {
  }

  redirectToHomepage(): void {
    this.router.navigate([Routing.HOME.BASE]);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.statusCode = params[Routing.PARAMS.ERROR_CODE_PARAM];

      if (this.statusCode === undefined) {
        this.statusCode = this.defaultErrorCode;
      }

      this.initiateErrorMessage();
    });
  }

  initiateErrorMessage(): void {
    this.i18nHelper.loadTranslations().subscribe(() => {
      if (this.statusCode === HttpStatusCode.NotFound.toString()) {
        this.errorMessage = this.translateService.instant('error.http.not_found');
      } else if (this.statusCode === HttpStatusCode.Forbidden.toString()) {
        this.errorMessage = this.translateService.instant('error.http.forbidden');
      }
    });
  }
}
