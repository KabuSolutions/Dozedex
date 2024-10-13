import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SplashScreenService {
  private splashVisible = new BehaviorSubject<boolean>(true);

  public get splashVisible$() {
    return this.splashVisible.asObservable();
  }

  public hideSplash() {
    this.splashVisible.next(false);
  }

  public showSplash() {
    this.splashVisible.next(true);
  }
}
