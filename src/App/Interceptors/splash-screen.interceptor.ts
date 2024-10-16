import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SplashScreenService } from "../Services/SplashScreen.service";
import { finalize, Observable } from "rxjs";

@Injectable()
export class SplashScreenInterceptor implements HttpInterceptor {
  private activeReq: number = 0;

  public constructor(private splashScreenService: SplashScreenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.activeReq ==0) {
      this.splashScreenService.showSplash();
    }
    this.activeReq++;

    return next.handle(req).pipe(
      finalize(() => {
        this.activeReq--;
        if(this.activeReq == 0) {
          this.splashScreenService.hideSplash();
        }
      })
    );
  }
}