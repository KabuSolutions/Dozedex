import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { enviroment } from '../../../Enviroments/enviroment';
import { SplashScreenServiceService } from '../../Services/splash-screen-service.service';

@Component({
  selector: 'splash-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.css'
})
export class SplashScreenComponent {
  public showSplash: boolean = true;
  public showPulsant: boolean = true;
  public splashIcon: string = enviroment.SplashIcon;
  public extension: string = this.splashIcon.substring(this.splashIcon.length - 3);
  public splashScreenService: SplashScreenServiceService = inject(SplashScreenServiceService);

  public constructor() {
    this.splashScreenService.GetTimeOut().then(SHowSplash => {
      this.showSplash = SHowSplash
    });
  }

  ngOnInit(): void {
    if (this.extension != "gif") {
      this.showPulsant = true;
    }
    else {
      this.showPulsant = false;
    }
  }
}
