import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SplashScreenService {
  private splashVisible = new BehaviorSubject<boolean>(false);

  public splashVisible$: Observable<boolean> = this.splashVisible.asObservable();

  public hideSplash() {
    this.splashVisible.next(false);
  }

  public showSplash() {
    this.splashVisible.next(true);
  }
}
