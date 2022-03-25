import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'psap-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorPageComponent implements OnInit {
  // TODO: implement this component in next commit
  statusCode: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.statusCode = this.route.snapshot.paramMap.get('statusCode') || '400';
  }
}
