import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SplashScreenServiceService {
  private url: string = "http://localhost:3000/sandbox/timeout?Timeout=3000";

  public async GetTimeOut(): Promise<boolean> {
    let  response:Response;
    try {
      response = await fetch(this.url);
      return false;
    }
    catch {
      return true;
    }
  }

}
