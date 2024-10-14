import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { SplashScreenService } from "../Services/SplashScreen.service";
import { finalize } from "rxjs";

export function SplashScreenInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const splashScreenService = inject(SplashScreenService);
  splashScreenService.showSplash();
  
  return next(req).pipe(
    finalize(() => {
      splashScreenService.hideSplash();
    })
  );
}