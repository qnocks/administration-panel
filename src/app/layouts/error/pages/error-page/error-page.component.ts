import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpStatusCode } from '@angular/common/http';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'psap-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorPageComponent implements OnInit {
  statusCode: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // TODO: string to constants
    this.statusCode = this.route.snapshot.paramMap.get('statusCode') || '400';
  }

  isNotFound(): boolean {
    return this.statusCode === HttpStatusCode.NotFound.toString();
  }

  isForbidden(): boolean {
    return this.statusCode === HttpStatusCode.Forbidden.toString();
  }
}
