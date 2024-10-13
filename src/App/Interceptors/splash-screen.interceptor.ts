import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SplashScreenService } from '../Services/SplashScreen.service';
import { finalize, Observable } from 'rxjs';

@Injectable()

export class SplashScreenInterceptor implements HttpInterceptor {
  public constructor (private splashScreenService: SplashScreenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.splashScreenService.showSplash();
    return next.handle(req).pipe(
      finalize(() => {
        this.splashScreenService.hideSplash();
      })
    );
  }
}
