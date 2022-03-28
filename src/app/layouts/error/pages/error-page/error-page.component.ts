import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpStatusCode } from '@angular/common/http';
import { Routing } from '../../../../core/constants/routing';

@Component({
  selector: 'psap-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorPageComponent implements OnInit {
  statusCode: string;
  readonly redirectUrl: string = `/${Routing.HOME.BASE}`;
  private readonly defaultErrorCode: string = '400';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.statusCode = this.route.snapshot.paramMap.get(Routing.PARAMS.ERROR_CODE_PARAM) || this.defaultErrorCode;
  }

  isNotFound(): boolean {
    return this.statusCode === HttpStatusCode.NotFound.toString();
  }

  isForbidden(): boolean {
    return this.statusCode === HttpStatusCode.Forbidden.toString();
  }
}
