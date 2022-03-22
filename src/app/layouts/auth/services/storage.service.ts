import { Injectable } from '@angular/core';
import { Constants } from '../../../core/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  getValue(key: string): string | null {
    const value = window.localStorage.getItem(key);
    return value;
  }

  setValue(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }

  removeValue(key: string): void {
    window.localStorage.removeItem(key);
  }
}
