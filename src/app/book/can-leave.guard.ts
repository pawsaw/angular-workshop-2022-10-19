import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CanLeaveGuard implements CanDeactivate<unknown> {
  canDeactivate(): boolean {
    return confirm('Are your sure that you want to leave?');
  }
}
