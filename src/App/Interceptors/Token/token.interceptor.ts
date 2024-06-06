import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let Jwt: string = environment.jwt_token

  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${Jwt}`,
    }
  });

  return next(req);
};
