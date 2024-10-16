import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SplashScreenComponent } from "../splash-screen/splash-screen.component";
import { BaseService } from '../../Services/Base.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SplashScreenInterceptor } from '../../Interceptors/splash-screen.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, SplashScreenComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SplashScreenInterceptor, multi:true}
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dozedex';

  public constructor(private baseService: BaseService) { }

  ngOnInit(): void {
    this.baseService.GetTimeOut();
  }
}
