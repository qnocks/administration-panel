import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  getValue(key: string): string | null {
    return window.localStorage.getItem(key);
  }

  setValue(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }

  removeValue(key: string): void {
    window.localStorage.removeItem(key);
  }
}
