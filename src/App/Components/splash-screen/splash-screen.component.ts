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
  showSplash: boolean = true;
  showPulsant: boolean = true;
  splashIcon: string = enviroment.SplashIcon;
  extension: string = this.splashIcon.substring(this.splashIcon.length - 3);
  splashScreenService: SplashScreenServiceService = inject(SplashScreenServiceService);

  async ngOnInit(): Promise<void> {
    if (this.extension != "gif") {
      this.showPulsant = true;
    }
    else {
      this.showPulsant = false;
    }

    await this.splashScreenService.GetTimeOut().then(SHowSplash => {
      this.showSplash = SHowSplash
    });
  }
}
