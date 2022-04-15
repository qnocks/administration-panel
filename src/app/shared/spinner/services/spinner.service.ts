import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class SpinnerService {
  private loading = new Subject<boolean>();

  show(): void {
    this.loading.next(true);
  }

  hide(): void {
    this.loading.next(false);
  }

  isLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }
}
