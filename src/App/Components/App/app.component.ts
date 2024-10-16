import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SplashScreenComponent } from "../splash-screen/splash-screen.component";
import { BaseService } from '../../Services/Base.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, SplashScreenComponent, CommonModule],
  // providers: [
  //   {provide: HTTP_INTERCEPTORS, useClass: SplashScreenInterceptor, multi:true}
  // ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dozedex';

  public constructor(private baseService: BaseService) { }

  public async ngOnInit(): Promise<void> {
    await this.delay(5);
    // this.baseService.GetTimeOut();
  }

  public GetLoadingStatus(): boolean {
    return this.baseService.showLoading;
  }

  public async delay(seconds: number): Promise<void>{
    this.baseService.showSplash();
    setTimeout(() => {
        this.baseService.hideSplash();
      // this.showSplash = false;
    }, seconds * 1000);
  }
}
