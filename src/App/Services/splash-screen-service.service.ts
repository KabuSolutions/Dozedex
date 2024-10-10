import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})

export class SplashScreenServiceService {
  private url: string = "http://localhost:3000/sandbox/timeout?Timeout=3000";

  public async GetTimeOut(): Promise<boolean> {
    let  response:AxiosResponse;
    response = await axios.get(this.url)

    if(response.status == 200){
      return false;
    }

    return true;
  }

}
